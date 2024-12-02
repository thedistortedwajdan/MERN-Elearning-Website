const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center p-8">
      <div className="bg-red-50 text-red-800 p-4 rounded-lg inline-block">
        <p className="font-medium">Error: {message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;