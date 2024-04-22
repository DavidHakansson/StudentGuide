
function linkConditional(link: string): any {
  if (link !== undefined && link !== "") {
    return (
      <a href={link} className="btn btn-primary btn-sm">
        Link to Facebook event
      </a>
    );
  }
  return "";
}


export default linkConditional;