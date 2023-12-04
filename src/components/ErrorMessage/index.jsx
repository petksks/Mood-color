const ErrorMessage = ({ input }) => {
  return (
    <div className="error-messege" data-testid="error-message" style={{ display: 'block', color: 'red' }}>
      Invalid color: {input}
    </div>
  );
};

export default ErrorMessage;