function PageHeader({ title, msg }) {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div md={6} className="col-md-6 m-auto text-center">
            <h1>{title}</h1>
            <p>{msg}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
