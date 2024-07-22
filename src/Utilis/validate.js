export const checkvalidation = (Email, password, Name) => {
  const isemailvalid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(Email);

  const ispasswordvalid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  const isnamevalid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(Name);

  if (!isemailvalid) return "Email is Not Valid";
  if (!ispasswordvalid) return "Password is Not Valid";
  if (!isnamevalid) return "Name is Not Valid";
  return null;
};
