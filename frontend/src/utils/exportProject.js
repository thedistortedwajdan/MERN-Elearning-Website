export const downloadProject = () => {
  const files = {
    'package.json': require('../../package.json'),
    'src/components/Header.jsx': require('../components/Header.jsx').default.toString(),
    'src/components/Footer.jsx': require('../components/Footer.jsx').default.toString(),
    'src/components/CourseCard.jsx': require('../components/CourseCard.jsx').default.toString(),
    'src/pages/Home.jsx': require('../pages/Home.jsx').default.toString(),
    'src/App.jsx': require('../App.jsx').default.toString(),
    'src/main.jsx': require('../main.jsx'),
    'src/index.css': require('../index.css'),
    'tailwind.config.js': require('../../tailwind.config.js'),
    'postcss.config.js': require('../../postcss.config.js'),
    'index.html': require('../../index.html'),
    'vite.config.js': require('../../vite.config.js')
  };

  const zip = new JSZip();

  Object.entries(files).forEach(([path, content]) => {
    zip.file(path, content);
  });

  zip.generateAsync({ type: 'blob' })
    .then(content => {
      const url = window.URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'edulearn-project.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
};