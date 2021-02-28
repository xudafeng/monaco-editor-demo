'use strict';

require.config({
  paths: {
    vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.22.3/min/vs',
  }
});

const container = document.getElementById('container');

require(['vs/editor/editor.main'], () => {
  fetch('./').then(response => response.text()).then(html => {
    window.editor = monaco.editor.create(container, {
      value: html,
      language: 'html',
      automaticLayout: true
    });
  })
});
