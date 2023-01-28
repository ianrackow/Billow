function parse_email(content_html) {
  const parser = new DOMParser();
  const emailHTML = parser.parseFromString(content_html, "text/html");
  emailHTML.getElementsByName("a");
}
