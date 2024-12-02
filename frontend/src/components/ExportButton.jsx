import { downloadProject } from '../utils/exportProject';

const ExportButton = () => {
  return (
    <button
      onClick={downloadProject}
      className="fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
    >
      Export Project
    </button>
  );
};

export default ExportButton;