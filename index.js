const numbers = document.getElementById('numbers')
const btn = document.getElementById('btn')
var audio =  document.getElementById('myAudio')
const text =  document.getElementById('text')

btn.addEventListener('click' , function(e)
{
    // alert("hoo")
    counter ();
    
})


    

let time= 10;

function counter()
{
   
   let take = setInterval(function()  {
       
        if(time < 0)
        {

            clearInterval(take )
            
        }
        else
        {
            numbers.innerHTML = time;
            time -= 1;
        }

        if(time===0)
        {
            return audioPlay();
        }
       
        
       
    
    },1000);

    
   
}



function audioPlay()
{
    
    
    
        audio = new Audio('./Happy Birthday ! Happy Birthday Song ! Happy Birthday.mp3')

        audio.play();
        
    
}
    
// }
// let data = 0;
// function counter()
// {


// for(let i=10;i>=0;i--)
// {
//     setTimeout(function()
//     {
//         if(i===0){
//             // h1.innerHTML = 'Stop';  
//             audioPlay();
//         }else{
//             numbers.innerHTML = i;
//         }
        
//     },1000*data);
//     data++;
// }
// }
// }
// audioPlay();
// audioPlay(); 
















//   function counter ()
// {

//    let value =  numbers.innerHTML
//        --value ;

            
//                 if(value==0)
//                 {
//                     numbers.innerHTML = 'stop'
//                             let text = document.getElementById('text').innerText = "stop!!";
//          text.classList.add('text');

//                 }
//                 else
//                 {
//                     numbers.innerHTML = value;
//                 }
           

//         }
    
    
  
   




 