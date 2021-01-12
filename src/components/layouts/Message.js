function Message({ variant, children }) {
  const styles = `alert alert-${variant}`
  return(
    <div className={styles} role="alert">
      {children}
    </div>
  )
}

Message.defaultProps = {
  variant: 'info',
};

export default Message;
