var myloader;
function Myfunction()
{

    myloader=setTimeout('MainLoader()',2000);

}
function MainLoader()
{
    document.getElementById("loader").style="display:none";
    document.getElementById("mainContent").style="display:block";
}