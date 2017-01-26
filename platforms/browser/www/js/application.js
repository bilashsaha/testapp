var apiHost = "http://192.168.1.109:3003";

function toggle_sidebar()
{
    var sidebar = document.getElementById("sidebar");

    console.log(sidebar.style.left);

    if(sidebar.style.left == "-200px")
    {
        sidebar.style.left = "0px";
    }
    else
    {
        sidebar.style.left = "-200px";
    }
}