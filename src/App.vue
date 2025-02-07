<template>
  <div id="app" class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h4 class="mb-0">Markdown 编辑器</h4>
      </div>
      <div class="card-body">
        <textarea ref="editor"></textarea>
      </div>
      <div class="card-footer text-center">
        <button class="btn btn-success px-4" @click="generateFiles">
          <i class="bi bi-download"></i> 生成并下载
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import SimpleMDE from "easymde";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { marked } from "marked";
import jsPDF from "jspdf";
import md5 from "crypto-js/md5";

import "easymde/dist/easymde.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  setup() {
    const editor = ref(null);
    let easyMDE;

    onMounted(() => {
      easyMDE = new SimpleMDE({
        element: editor.value,
        spellChecker: false,
        autosave: {
          enabled: true,
          uniqueId: "myMarkdownEditor",
          delay: 1000,
        },
        toolbar: [
          "bold",
          "italic",
          "heading",
          "|",
          "quote",
          "unordered-list",
          "ordered-list",
          "|",
          "link",
          "image",
          "|",
          "preview",
          "side-by-side",
          "fullscreen",
          "|",
          "guide",
        ],
      });
    });

    const generateFiles = async () => {
      const content = easyMDE.value();
      const dateStr = new Date().toISOString().split("T")[0];
      const hash = md5(content).toString();
      const filename = `${dateStr}-${hash}`;

      // 生成 Markdown 文件
      const mdBlob = new Blob([content], { type: "text/markdown" });

      // 生成 PDF 文件
      const pdfBlob = await generatePDF(content);

      // 创建 ZIP 文件
      const zip = new JSZip();
      zip.file(`${filename}.md`, mdBlob);
      zip.file(`${filename}.pdf`, pdfBlob);

      // 生成 ZIP 并下载
      zip.generateAsync({ type: "blob" }).then((blob) => {
        saveAs(blob, `${filename}.zip`);
      });
    };

    const generatePDF = async (markdownText) => {
      return new Promise((resolve) => {
        const pdf = new jsPDF();
        const text = marked(markdownText, { sanitize: true });
        pdf.text(text, 10, 10, { maxWidth: 180 });
        resolve(pdf.output("blob"));
      });
    };

    return { editor, generateFiles };
  },
};
</script>

<style>
.EasyMDEContainer {
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  background: #f8f9fa;
}

.card {
  max-width: 800px;
  margin: 0 auto;
}

.card-header {
  font-weight: bold;
}

button {
  font-size: 16px;
  transition: all 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}
</style>