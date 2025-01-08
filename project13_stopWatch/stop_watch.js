let minTag=document.querySelector('#min');
let secTag=document.querySelector('#sec');
let mSecTag=document.querySelector('#m-sec');
let startbtn=document.querySelector('#start-btn');
let resetbtn=document.querySelector('#reset-btn');
let stopbtn=document.querySelector('#stop-btn');


let mSec=0;
let sec=0;
let min=0;

let flag=true;

function timerRunning()
{
    mSec=mSec+10;
    if (mSec==1000)
    {
        sec=sec+1;
        mSec=0;
        if(sec==60)
        {
            min=min+1;
            sec=0
        }
    }

    minTag.textContent=concatZero(min);
    secTag.textContent=concatZero(sec);
    mSecTag.textContent=concatZero(mSec);
}

let id;

// program for start-button
startbtn.addEventListener('click',function()
{
    if(flag)
    {
        id=setInterval(timerRunning,100);
        flag=false;
    }
});

// program for stop-button

stopbtn.addEventListener('click',function()
{
    if(!flag)
    {
        clearInterval(id);
        flag=true;
    }
});

// program for reset-button

resetbtn.addEventListener('click',function()
{
    min=0;
    sec=0;
    mSec=0;
        
        flag=true;
        clearInterval(id);
        minTag.textContent="00";
        secTag.textContent="00";
        mSecTag.textContent="00";
    });


    function concatZero(time)
    {
        if (time<=9) return "0"+time;
        else return time;
    }



