const ErrorMessage = ({ input }) => {
  return (
    <div data-testid="error-message" style={{ display: 'block', color: 'red' }}>
      Invalid color: {input}
    </div>
  );
};

export default ErrorMessage;