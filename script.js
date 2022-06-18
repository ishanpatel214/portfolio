
let theme = localStorage.getItem('theme')
if('theme' === null)
{
    setTheme('llight')
}
else
{
    setTheme(theme )
}

let themeDots = document.getElementsByClassName("theme-dot")
for(var i=0; themeDots.length > i; i++)
{
    themeDots[i].addEventListener('click', function()
    {
        let mode = this.dataset.mode
        console.log("Option clicked:", mode)
        setTheme(mode)
    })
}

function setTheme(mode)
{
    if(mode === "llight")
    {
        document.getElementById('theme-style').href = 'default.css'
    }
    else if(mode === "bblue")
    {
        document.getElementById('theme-style').href = 'blue.css'
    }
    else if(mode === "ggreen")
    {
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode === "ppurple")
    {
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme', mode)
}