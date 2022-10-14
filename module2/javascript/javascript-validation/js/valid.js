function validation()
{
    if(document.frm.fname.value=="")
    {
      alert('Please enter your firstName')
      document.frm.fname.focus();
      return false;
    }
    var f=/^[A-Za-z]+$/;
    if(!f.test(document.frm.fname.value))
    {
      alert('Please enter your firstName only Alphabtic character')
      document.frm.fname.focus();
      return false;
    }
    if(document.frm.lname.value=="")
    {
      alert('Please enter your lastName')
      document.frm.lname.focus();
      return false;
    }
    var l=/^[A-Za-z]+$/;
    if(!l.test(document.frm.lname.value))
    {
      alert('Please enter your lastName only Alphabtic character')
      document.frm.lname.focus();
      return false;
    }
    if(document.frm.email.value=="")
    {
      alert('Please enter your email')
      document.frm.email.focus();
      return false;
    }
    var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!e.test(document.frm.email.value))
    {
      alert('Please enter your valid email address')
      document.frm.email.focus();
      return false;
    }
}