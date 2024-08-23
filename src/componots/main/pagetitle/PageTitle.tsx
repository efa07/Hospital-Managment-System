import "./pagetitle.css"
const PageTitle = ({ page }) => {
  return (
    <div className="title">
      <h1>{page}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
            <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </div>
  )
}

export default PageTitle
