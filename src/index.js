/*Acá va tu código*/
document.getElementById("pagTwo").style.display= "none";
document.getElementById("pagThree").style.display= "none";
document.getElementById("pagFour").style.display= "none";
document.getElementById("pagFive").style.display= "none";
document.getElementById("pagSix").style.display= "none";
document.getElementById("pagSeven").style.display="none";

document.getElementById("buttonStart").addEventListener("click", ()=>{
    let nameUser = document.getElementById("name").value;
    document.getElementById("pagTwo").style.display= "block";
    document.getElementById("pagTwo").innerHTML = `<p>Hola, <strong>${nameUser.toUpperCase()}</strong> debes responder las adivinanzas para descubrir los mensajes secretos, solo debes responder y reemplazar la letra original por la cifrada. </p><button id="play">A JUGAR!!!</button>`;
    document.getElementById("pagOne").style.display= "none";

    document.getElementById("play").addEventListener("click", ()=>{
        document.getElementById("pagThree").style.display= "block";
        document.getElementById("pagThree").innerHTML = `<p> Elige un número del 1 al 9 para decifrar los códigos secretos</p>
        <input type="number" maxlength="1" size="2" id="numbers"> <button id="btnContinue">CONTINUAR</button>`;
        document.getElementById("pagTwo").style.display= "none";
        
        document.getElementById("btnContinue").addEventListener("click",()=>{
            document.getElementById("pagFour").style.display= "block";            
            document.getElementById("pagFour").innerHTML =`<h1 id="titleOne"><strong>C O D I G O  1</strong></h1>
            <div>1.  No son flores, pero tienen plantas y olores <input type="text" maxlength="4" size="10" id="feet" > <button id="btnFeet">CIFRAR</button></div> ${'<br>'} 
    <div class="father">
        <div class="son" >
           <input type="text" maxlength="1" size="1" id="oneInputFeet"> 
           <label for="">3</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="twoInputFeet">
            <label for="">14</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="threeInputFeet">
            <label for="">4</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="fourInputFeet">
            <label for="">6</label>
        </div>
    </div>${'<br>'} ${'<br>'} 
    <div>2. ¿Que sera lo que es? Que mientras más grande, menos se ve <input type="text" maxlength="9" size="10" id="dark"> <button id="btnDarknees">CIFRAR</button></div>${'<br>'}
    <div class="father">
            <div class="son">
                <input type="text" maxlength="1" size="1" id="oneInputDark">
                <label for="">8</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="twoInputDark">
                <label for="">6</label>
            </div>
            <div></div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="threeInputDark">
                <label for="">15</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="fourInputDark">
                <label for="">2</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id= "fiveInputDark">
                <label for="">11</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="sixInputDark">
                    <label for="">14</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id= "sevenInputDark">
                    <label for="">5</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="eigthInputDark">
                    <label for="">9</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="nineInputDark">
                    <label for="">5</label>
            </div>
        </div>${'<br>'} ${'<br>'} 
    
    <div>3. Salimos cuando anochece, nos vamos si canta el gallo y hay quien dice que nos ve cuando le pisamos un callo <input type="text" maxlength="9" size="10" id="stars"> <button id="btnStars">CIFRAR</button></div>${'<br>'}
    <div class="father">
            <div class="son">
                <input type="text" maxlength="1" size="1" id="oneInputStar">
                <label for="">4</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="twoInputStar">
                <label for="">6</label>
            </div>
            <div></div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="threeInputStar">
                <label for="">1</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="fourInputStar">
                <label for="">11</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="fiveInputStar">
                <label for="">4</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id= "sixInputStar">
                    <label for="">7</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1"id="sevenInputStar" >
                    <label for="">7</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="eigthInputStar">
                    <label for="">9</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="nineInputStar">
                    <label for="">6</label>
            </div>
        </div>${'<br>'}${'<br>'}${'<br>'}

        <h2> REEMPLAZA LAS LETRAS</h2>${'<br>'}
        <div class="father">
        <div class="son">
            <input type="text" maxlength="1" size="1" id="one">
            <label for="">1</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="two">
            <label for="">2</label>
        </div>
        <div></div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="three">
            <label for="">3</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="four">
            <label for="">2</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="five">
            <label for="">4</label>
        </div>
        <div class="son">
                <input type="text" maxlength="1" size="1" id="six">
                <label for="">5</label>
        </div>
        <div class="son">
                <input type="text" maxlength="1" size="1"
                id="seven">
                <label for="">4</label>
        </div>
        <div class="son">
                <input type="text" maxlength="1" size="1" id="eigth">
                <label for="">6</label>
        </div></div> <button id="btnDecodeOne">DECIFRAR</button>${'<br>'}${'<br>'}

    <p id="hideOne">MENSAJE SECRETO</p>
    <p id="MensaggeOneSecret"></p>${'<br>'}${'<br>'}
    <button id="pageFive">CODIGO 2</button>`;

    document.getElementById("btnFeet").addEventListener("click",()=>{
        let feet=document.getElementById("feet").value.toUpperCase();
        let number=parseInt( document.getElementById("numbers").value);
        
//llamar funcion
window.cipher.encode(feet,number);
//console.log(window.cipher.encode(feet,number))
let ansFeet= window.cipher.encode(feet,number);
        let inputOneFeet=ansFeet.slice(0,1);
        document.getElementById("oneInputFeet").value= `${inputOneFeet}`
        let inputTwoFeet=ansFeet.slice(1,2);
        document.getElementById("twoInputFeet").value= `${inputTwoFeet}`
        let inputThreeFeet=ansFeet.slice(2,3);
        document.getElementById("threeInputFeet").value= `${inputThreeFeet}`
        let inputFourFeet=ansFeet.slice(3,4);
        document.getElementById("fourInputFeet").value= `${inputFourFeet}`  
        }        
    );
    document.getElementById("btnDarknees").addEventListener("click",()=>{
        let dark=document.getElementById("dark").value.toUpperCase();
        let number=parseInt( document.getElementById("numbers").value);
      //  let textCipher= "";
// llamar funcion
window.cipher.encode(dark,number);
let ansDark= window.cipher.encode(dark,number);
        let inputOneDark= ansDark.slice(0,1);
        document.getElementById("oneInputDark").value= `${inputOneDark}`
        let inputTwoDark=ansDark.slice(1,2);
        document.getElementById("twoInputDark").value= `${inputTwoDark}`
        let inputThreeDark=ansDark.slice(2,3);
        document.getElementById("threeInputDark").value= `${inputThreeDark}`
        let inputFourDark=ansDark.slice(3,4);
        document.getElementById("fourInputDark").value= `${inputFourDark}` 
        let inputFiveDark= ansDark.slice(4,5);
        document.getElementById("fiveInputDark").value= `${inputFiveDark}`
        let inputSixDark=ansDark.slice(5,6);
        document.getElementById("sixInputDark").value= `${inputSixDark}`
        let inputSevenDark=ansDark.slice(6,7);
        document.getElementById("sevenInputDark").value= `${inputSevenDark}`
        let inputEigthDark=ansDark.slice(7,8);
        document.getElementById("eigthInputDark").value= `${inputEigthDark}`
        let inputNineDark=ansDark.slice(8,9);
        document.getElementById("nineInputDark").value= `${inputNineDark}`  
        });

        document.getElementById("btnStars").addEventListener("click",()=>{
            let stars=document.getElementById("stars").value.toUpperCase();
            let number=parseInt( document.getElementById("numbers").value);
        //    let textCipher= "";
        window.cipher.encode(stars,number);
        let ansStars= window.cipher.encode(stars,number);
    
            let inputOneStar= ansStars.slice(0,1);
            document.getElementById("oneInputStar").value= `${inputOneStar}`
            let inputTwoStar=ansStars.slice(1,2);
            document.getElementById("twoInputStar").value= `${inputTwoStar}`
            let inputThreeStar=ansStars.slice(2,3);
            document.getElementById("threeInputStar").value= `${inputThreeStar}`
            let inputFourStar=ansStars.slice(3,4);
            document.getElementById("fourInputStar").value= `${inputFourStar}`
            let inputFiveStar=ansStars.slice(4,5);
            document.getElementById("fiveInputStar").value= `${inputFiveStar}`
            let inputSixStar=ansStars.slice(5,6);
            document.getElementById("sixInputStar").value= `${inputSixStar}`
            let inputSevenStar=ansStars.slice(6,7);
            document.getElementById("sevenInputStar").value= `${inputSevenStar}`
            let inputEigthStar=ansStars.slice(7,8);
            document.getElementById("eigthInputStar").value= `${inputEigthStar}`
            let inputNineStar=ansStars.slice(8,9);
            document.getElementById("nineInputStar").value= `${inputNineStar}`  
            });

    document.getElementById("btnDecodeOne").addEventListener("click",()=>{
        let ansOne=document.getElementById("one").value.toUpperCase();        
        let ansTwo=document.getElementById("two").value.toUpperCase();
        let ansThree=document.getElementById("three").value.toUpperCase();
        let ansFour=document.getElementById("four").value.toUpperCase();
        let ansFive=document.getElementById("five").value.toUpperCase();
        let ansSix=document.getElementById("six").value.toUpperCase();
        let ansSeven=document.getElementById("seven").value.toUpperCase();
        let ansEigth=document.getElementById("eigth").value.toUpperCase();
        let number=parseInt( document.getElementById("numbers").value);
        //let textCipher= "";
//llamar funcion decode
    window.cipher.decode(ansOne,number)
    let ansOneCipher= window.cipher.decode(ansOne,number);
    window.cipher.decode(ansTwo,number)
    let ansTwoCipher= window.cipher.decode(ansTwo,number);
    window.cipher.decode(ansThree,number)
    let ansThreeCipher= window.cipher.decode(ansThree,number);
    window.cipher.decode(ansFour,number)
    let ansFourCipher= window.cipher.decode(ansFour,number);
    window.cipher.decode(ansFive,number)
    let ansFiveCipher= window.cipher.decode(ansFive,number);
    window.cipher.decode(ansSix,number)
    let ansSixCipher= window.cipher.decode(ansSix,number);
    window.cipher.decode(ansSeven,number)
    let ansSevenCipher= window.cipher.decode(ansSeven,number);
    window.cipher.decode(ansEigth,number)
        let ansEigthCipher= window.cipher.decode(ansEigth,number);

        document.getElementById("MensaggeOneSecret").innerHTML=`${ansOneCipher}${ansTwoCipher}${'&nbsp;'}${ansThreeCipher}${ansFourCipher}${ansFiveCipher}${ansSixCipher}${ansSevenCipher}${ansEigthCipher}`
        document.getElementById("hideOne").style.display= "none";
        });
    document.getElementById("pagThree").style.display= "none";
//______________________________________________________________________________________________________________

    document.getElementById("pageFive").addEventListener("click",()=>{
       document.getElementById("pagFive").style.display= "block";
       document.getElementById("pagFive").innerHTML= ` <h1 id="titleTwo"><strong>C O D I G O  2</strong></h1>
       <div>1. No hay ningun dia del año en que pueda descansar, siempre en tu pecho, cantando ando con mi ritmo tic tac.<input type="text" maxlength="7" size="10" id="heart"> <button id="btnHeart">CIFRAR</button>${'<br>'}</div>
    <div class="father">
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="oneInputHeart">
                    <label for="">15</label>
                </div>
                <div class="son">
                    <input type="text" maxlength="1" size="1" id="twoInputHeart">
                    <label for="">8</label>
                </div>
                <div></div>
                <div class="son">
                    <input type="text" maxlength="1" size="1" id="threeInputHeart">
                    <label for="">11</label>
                </div>
                <div class="son">
                    <input type="text" maxlength="1" size="1" id= "fourInputHeart">
                    <label for="">9</label>
                </div>
                <div class="son">
                    <input type="text" maxlength="1" size="1" id= "fiveInputHeart">
                    <label for="">16</label>
                </div>
                <div class="son">
                        <input type="text" maxlength="1" size="1" id="sixInputHeart">
                        <label for="">8</label>
                </div>
                <div class="son">
                        <input type="text" maxlength="1" size="1" id="sevenInputHeart">
                        <label for="">12</label>
                </div>
    </div>${'<br>'}${'<br>'}
    
    <div>2. Somos dos hermanas, que parecen persianas que suben y bajan.<input type="text" maxlength="8" size="10" id="eyelids"> <button id="btnEyelids">CIFRAR</button></div>${'<br>'}
    <div class="father">
            <div class="son">
                <input type="text" maxlength="1" size="1" id="oneInputEyelids">
                <label for="">3</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="twoInputEyelids">
                <label for="">9</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="threeInputEyelids">
                <label for="">11</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="fourInputEyelids">
                <label for="">3</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id= "fiveInputEyelids">
                    <label for="">9</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="sixInputEyelids">
                    <label for="">5</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="sevenInputEyelids">
                    <label for="">8</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="eigthInputEyelids">
                    <label for="">6</label>
            </div>
        </div>${'<br>'}${'<br>'}
    <div>3. Por que tengo sangre fría aparesco en primavera, en piedras encaramada siempre al sol.<input type="text" maxlength="9" size="10" id="lizard"> <button id="btnLizard">CIFRAR</button></div>${'<br>'}
    <div class="father">
            <div class="son">
                <input type="text" maxlength="1" size="1" id="oneInputLizard">
                <label for="">7</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="twoInputLizard">
                <label for="">9</label>
            </div>
            <div></div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="threeInputLizard">
                <label for="">10</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="fourInputLizard">
                <label for="">9</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id= "fiveInputLizard">
                <label for="">11</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="sixInputLizard">
                <label for="">1</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="sevenInputLizard">
                <label for="">14</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1"id="eigthInputLizard">
                <label for="">18</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id= "nineInputLizard">
                <label for="">9</label>
            </div>
    </div>${'<br>'}${'<br>'}
    <div>4. Cinco hermanos muy unidos, que no se pueden mirar, cuando riñen aunque quieran no se pueden separar.<input type="text" maxlength="5" size="10" id="finger"> <button id="btnFinger">CIFRAR</button></div>${'<br>'}
    <div class="father">
            <div class="son">
                <input type="text" maxlength="1" size="1" id ="oneInputFinger">
                <label for="">5</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id= "twoInputFinger">
                <label for="">4</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="threeInputFinger">
                <label for="">5</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1"id="fourInputFinger">
                <label for="">8</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="fiveInputFinger">
                    <label for="">6</label>
            </div>
        </div>${'<br>'}${'<br>'}

        <p> REEMPLAZA LAS LETRAS</p>
        <div class="father">
        <div class="son">
            <input type="text" maxlength="1" size="1" id="oneCodeTwo">
            <label for="">7</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="twoCodeTwo">
            <label for="">8</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="threeCodeTwo">
            <label for="">4</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="fourCodeTwo">
            <label for="">6</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="fiveCodeTwo">
            <label for="">1</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="sixCodeTwo">
            <label for="">9</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="sevenCodeTwo">
            <label for="">6</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="eigthCodeTwo">
            <label for="">7</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="nineCodeTwo">
            <label for="">8</label>
       </div>
       <div class="son">
            <input type="text" maxlength="1" size="1" id="tenCodeTwo">
            <label for="">10</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="elevenCodeTwo">
            <label for="">11</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="twelveCodeTwo">
            <label for="">9</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id= "thirteenCodeTwo">
            <label for="">12</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="fourteenCodeTwo">
            <label for="">5</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="fiveteenCodeTwo">
            <label for="">8</label>
        </div>
    </div>    <button id="btnDecodeTwo">DECIFRAR</button>${'<br>'}${'<br>'}
    <p id="hideTwo">MENSAJE SECRETO</p>
    <p id="MensaggeTwoSecret"></p>
    ${'<br>'}${'<br>'}
    <button id="pageSix">CODIGO 3</button>`
    document.getElementById("btnHeart").addEventListener("click",()=>{
        let heart=document.getElementById("heart").value.toUpperCase();
        let number=parseInt( document.getElementById("numbers").value);
        //let textCipher= "";
//llamar funcion cipher
window.cipher.encode(heart,number);
let ansHeart=window.cipher.encode(heart,number);
        let inputOneHeart= ansHeart.slice(0,1);
        document.getElementById("oneInputHeart").value= `${inputOneHeart}`
        let inputTwoHeart=ansHeart.slice(1,2);
        document.getElementById("twoInputHeart").value= `${inputTwoHeart}`
        let inputThreeHeart=ansHeart.slice(2,3);
        document.getElementById("threeInputHeart").value= `${inputThreeHeart}`
        let inputFourHeart=ansHeart.slice(3,4);
        document.getElementById("fourInputHeart").value= `${inputFourHeart}` 
        let inputFiveHeart= ansHeart.slice(4,5);
        document.getElementById("fiveInputHeart").value= `${inputFiveHeart}`
        let inputSixHeart= ansHeart.slice(5,6);
        document.getElementById("sixInputHeart").value= `${inputSixHeart}`
        let inputSevenHeart= ansHeart.slice(6,7);
        document.getElementById("sevenInputHeart").value= `${inputSevenHeart}`  
        });

        document.getElementById("btnEyelids").addEventListener("click",()=>{
            let eyelids=document.getElementById("eyelids").value.toUpperCase();
            let number=parseInt( document.getElementById("numbers").value);
          //  let textCipher= "";
//llamar funcion cipher
window.cipher.encode(eyelids,number);
let ansEyelinds= window.cipher.encode(eyelids,number);
            let inputOneEyelids= ansEyelinds.slice(0,1);
            document.getElementById("oneInputEyelids").value= `${inputOneEyelids}`
            let inputTwoEyelids=ansEyelinds.slice(1,2);
            document.getElementById("twoInputEyelids").value= `${inputTwoEyelids}`
            let inputThreeEyelids=ansEyelinds.slice(2,3);
            document.getElementById("threeInputEyelids").value= `${inputThreeEyelids}`
            let inputFourEyelids=ansEyelinds.slice(3,4);
            document.getElementById("fourInputEyelids").value= `${inputFourEyelids}` 
            let inputFiveEyelids= ansEyelinds.slice(4,5);
            document.getElementById("fiveInputEyelids").value= `${inputFiveEyelids}`
            let inputSixEyelids= ansEyelinds.slice(5,6);
            document.getElementById("sixInputEyelids").value= `${inputSixEyelids}`
            let inputSevenEyelids=ansEyelinds.slice(6,7);
            document.getElementById("sevenInputEyelids").value= `${inputSevenEyelids}`  
            let inputEigthEyelids= ansEyelinds.slice(7,8);
            document.getElementById("eigthInputEyelids").value= `${inputEigthEyelids}`
            });

            document.getElementById("btnLizard").addEventListener("click",()=>{
                let lizard=document.getElementById("lizard").value.toUpperCase();
                let number=parseInt( document.getElementById("numbers").value);
            //    let textCipher= "";
 //llamar funcion cipher
 window.cipher.encode(lizard,number);
 let ansLizard= window.cipher.encode(lizard,number);
                let inputOneLizard= ansLizard.slice(0,1);
                document.getElementById("oneInputLizard").value= `${inputOneLizard}`
                let inputTwoLizard=ansLizard.slice(1,2);
                document.getElementById("twoInputLizard").value= `${inputTwoLizard}`
                let inputThreeLizard=ansLizard.slice(2,3);
                document.getElementById("threeInputLizard").value= `${inputThreeLizard}`
                let inputFourLizard=ansLizard.slice(3,4);
                document.getElementById("fourInputLizard").value= `${inputFourLizard}`
                let inputFiveLizard= ansLizard.slice(4,5);
                document.getElementById("fiveInputLizard").value= `${inputFiveLizard}`
                let inputSixLizard=ansLizard.slice(5,6);
                document.getElementById("sixInputLizard").value= `${inputSixLizard}`
                let inputSevenLizard=ansLizard.slice(6,7);
                document.getElementById("sevenInputLizard").value= `${inputSevenLizard}`
                let inputEigthLizard=ansLizard.slice(7,8);
                document.getElementById("eigthInputLizard").value= `${inputEigthLizard}`
                let inputNineLizard=ansLizard.slice(8,9);
                document.getElementById("nineInputLizard").value= `${inputNineLizard}`  
                });

                document.getElementById("btnFinger").addEventListener("click",()=>{
                    let finger=document.getElementById("finger").value.toUpperCase();
                    let number=parseInt( document.getElementById("numbers").value);
              //      let textCipher= "";
            
//llamar funcion cipher
window.cipher.encode(finger,number);
let ansFinger= window.cipher.encode(finger,number);
                    let inputOneFinger= ansFinger.slice(0,1);
                    document.getElementById("oneInputFinger").value= `${inputOneFinger}`
                    let inputTwoFinger=ansFinger.slice(1,2);
                    document.getElementById("twoInputFinger").value= `${inputTwoFinger}`
                    let inputThreeFinger=ansFinger.slice(2,3);
                    document.getElementById("threeInputFinger").value= `${inputThreeFinger}`
                    let inputFourFinger=ansFinger.slice(3,4);
                    document.getElementById("fourInputFinger").value= `${inputFourFinger}` 
                    let inputFiveFinger= ansFinger.slice(4,5);
                    document.getElementById("fiveInputFinger").value= `${inputFiveFinger}`
                    });

       document.getElementById("btnDecodeTwo").addEventListener("click",()=>{
        let ansOneCodeTwo=document.getElementById("oneCodeTwo").value.toUpperCase();        
        let ansTwoCodeTwo=document.getElementById("twoCodeTwo").value.toUpperCase();
        let ansThreeCodeTwo=document.getElementById("threeCodeTwo").value.toUpperCase();
        let ansFourCodeTwo=document.getElementById("fourCodeTwo").value.toUpperCase();
        let ansFiveCodeTwo=document.getElementById("fiveCodeTwo").value.toUpperCase();
        let ansSixCodeTwo=document.getElementById("sixCodeTwo").value.toUpperCase();
        let ansSevenCodeTwo=document.getElementById("sevenCodeTwo").value.toUpperCase();
        let ansEigthCodeTwo=document.getElementById("eigthCodeTwo").value.toUpperCase();
        let ansNineCodeTwo=document.getElementById("nineCodeTwo").value.toUpperCase();
        let ansTenCodeTwo=document.getElementById("tenCodeTwo").value.toUpperCase();
        let ansElevenCodeTwo=document.getElementById("elevenCodeTwo").value.toUpperCase();
        let ansTwelveCodeTwo=document.getElementById("twelveCodeTwo").value.toUpperCase();        
        let ansThirteenCodeTwo=document.getElementById("thirteenCodeTwo").value.toUpperCase();
        let ansFourteenCodeTwo=document.getElementById("fourteenCodeTwo").value.toUpperCase();
        let ansFiveteenCodeTwo=document.getElementById("fiveteenCodeTwo").value.toUpperCase();
        

        let number=parseInt( document.getElementById("numbers").value);
        //let textCipherTwoCode= "";
//llamar funcion
window.cipher.decode(ansOneCodeTwo,number)
let ansOneCodeCipher= window.cipher.decode(ansOneCodeTwo,number);
window.cipher.decode(ansTwoCodeTwo,number)
let ansTwoCipherCode= window.cipher.decode(ansTwoCodeTwo,number);
window.cipher.decode(ansThreeCodeTwo,number)
let ansThreeCipherCode= window.cipher.decode(ansThreeCodeTwo,number);
window.cipher.decode(ansFourCodeTwo,number)
let ansFourCipherCode= window.cipher.decode(ansFourCodeTwo,number);
window.cipher.decode(ansFiveCodeTwo,number)
let ansFiveCipherCode= window.cipher.decode(ansFiveCodeTwo,number);
window.cipher.decode(ansSixCodeTwo,number)
let ansSixCipherCode= window.cipher.decode(ansSixCodeTwo,number);
window.cipher.decode(ansSevenCodeTwo,number)
let ansSevenCipherCode= window.cipher.decode(ansSevenCodeTwo,number);
window.cipher.decode(ansEigthCodeTwo,number)
let ansEigthCipherCode= window.cipher.decode(ansEigthCodeTwo,number);
window.cipher.decode(ansNineCodeTwo,number)
let ansNineCipherCode= window.cipher.decode(ansNineCodeTwo,number);
window.cipher.decode(ansTenCodeTwo,number)
let ansTenCipherCode= window.cipher.decode(ansTenCodeTwo,number);
window.cipher.decode(ansElevenCodeTwo,number)
let ansElevenCipherCode= window.cipher.decode(ansElevenCodeTwo,number);
window.cipher.decode(ansTwelveCodeTwo,number)
let ansTwelveCipherCode= window.cipher.decode(ansTwelveCodeTwo,number);
window.cipher.decode(ansThirteenCodeTwo,number)
let ansThirteenCipherCode= window.cipher.decode(ansThirteenCodeTwo,number);
window.cipher.decode(ansFourteenCodeTwo,number)
let ansFourteenCipherCode= window.cipher.decode(ansFourteenCodeTwo,number);
window.cipher.decode(ansFiveteenCodeTwo,number)
let ansFiveteenCipherCode= window.cipher.decode(ansFiveteenCodeTwo,number);
         document.getElementById("MensaggeTwoSecret").innerHTML=`${ansOneCodeCipher}${ansTwoCipherCode}${'&nbsp;'}${ansThreeCipherCode}${ansFourCipherCode}${ansFiveCipherCode}${ansSixCipherCode}${ansSevenCipherCode}${'&nbsp;'}${ansEigthCipherCode}${ansNineCipherCode}${ansTenCipherCode}${ansElevenCipherCode}${ansTwelveCipherCode}${ansThirteenCipherCode}${ansFourteenCipherCode}${ansFiveteenCipherCode}`
        document.getElementById("hideTwo").style.display= "none"
        });
       document.getElementById("pagFour").style.display= "none";

       document.getElementById("pageSix").addEventListener("click",()=>{
           document.getElementById("pagSix").style.display= "block";
           document.getElementById("pagSix").innerHTML=`<h1 id="titleThree"<strong>C O D I G O  3</strong></h1>
           <div>1. ¿Que animal tiene las cinco vocales?<input type="text" maxlength="10" size="10" id="bat"> <button id="btnBat">CIFRAR</button></div> ${'<br>'}
    <div class="father">
        <div class="son">
           <input type="text" maxlength="1" size="1" id="oneInputBat"> 
           <label for="">19</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="twoInputBat">
            <label for="">2</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="threeInputBat">
            <label for="">11</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="fourInputBat">
            <label for="">15</label>
        </div>
        <div class="son">
                <input type="text" maxlength="1" size="1" id="fiveInputBat"> 
                <label for="">14</label>
             </div>
             <div class="son">
                 <input type="text" maxlength="1" size="1" id="sixInputBat">
                 <label for="">4</label>
             </div>
             <div class="son">
                 <input type="text" maxlength="1" size="1" id="sevenInputBat">
                 <label for="">7</label>
             </div>
             <div class="son">
                 <input type="text" maxlength="1" size="1" id="eigthInputBat">
                 <label for="">9</label>
             </div>
             <div class="son">
                    <input type="text" maxlength="1" size="1" id= "nineInputBat">
                    <label for="">10</label>
                </div>
                <div class="son">
                    <input type="text" maxlength="1" size="1" id= "tenInputBat">
                    <label for="">8</label>
                </div>
    </div>
    <div>2. ¿Que cosa sera aquella que mirada al derecho y mirada al reves, siempre un numero es? <input type="text" maxlength="6" size="10" id="numberNine"> <button id="btnNumberNine" >CIFRAR</button></div>${'<br>'}
    <div class="father">
            <div class="son">
                <input type="text" maxlength="1" size="1" id="oneInputNumberNine">
                <label for="">12</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="twoInputNumberNine">
                <label for="">2</label>
            </div>
            <div></div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="threeInputNumberNine">
                <label for="">4</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="fourInputNumberNine">
                <label for="">13</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="fiveInputNumberNine">
                <label for="">4</label>
            </div>
            
        </div>
    
    <div>3. Son tres colores, ordeno a cada uno, si todos me respetan no habra accidente alguno<input type="text" maxlength="8" size="10" id="traffic"> <button id="btnTraffic">CIFRAR</button></div>${'<br>'}
    <div class="father">
            <div class="son">
                <input type="text" maxlength="1" size="1" id="oneInputTraffic">
                <label for="">6</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="twoInputTraffic">
                <label for="">4</label>
            </div>
            <div></div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="threeInputTraffic">
                <label for="">19</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id= "fourInputTraffic">
                <label for="">9</label>
            </div>
            <div class="son">
                <input type="text" maxlength="1" size="1" id="fiveInputTraffic">
                <label for="">20</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="sixInputTraffic">
                    <label for="">8</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="sevenInputTraffic">
                    <label for="">11</label>
            </div>
            <div class="son">
                    <input type="text" maxlength="1" size="1" id="eigthInputTraffic">
                    <label for="">8</label>
            </div>
        </div>${'<br>'}${'<br>'}

        <p> REEMPLAZA LAS LETRAS</p>
        <div class="father">
        <div class="son">
            <input type="text" maxlength="1" size="1" id="oneCodeThree">
            <label for="">4</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="twoCodeThree">
            <label for="">11</label>
        </div>
        <div></div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="threeCodeThree">
            <label for="">4</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="fourCodeThree">
            <label for="">6</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="fiveCodeThree">
            <label for="">2</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id= "sixCodeThree">
            <label for="">12</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="sevenCodeThree">
            <label for="">10</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="eigthCodeThree">
            <label for="">4</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="nineCodeThree">
            <label for="">12</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="tenCodeThree">
            <label for="">14</label>
        </div>
        <div class="son">
            <input type="text" maxlength="1" size="1" id="elevenCodeThree">
            <label for="">8</label>
        </div>
    </div> <button id="btnDecodeThree">DECIFRAR</button>${'<br>'}${'<br>'}
    <p id="hideThree">MENSAJE SECRETO</p>
    <p id="MensaggeThreeSecret"></p>
    ${'<br>'}${'<br>'}
    <button id="end">FINALIZAR</button>`

    document.getElementById("btnBat").addEventListener("click",()=>{
        let bat=document.getElementById("bat").value.toUpperCase();      
        let number=parseInt( document.getElementById("numbers").value);
       
        window.cipher.encode(bat,number)
        let ansBat= window.cipher.encode(bat,number)
            let inputOneBat= ansBat.slice(0,1);
                document.getElementById("oneInputBat").value= `${inputOneBat}`
                let inputTwoBat=ansBat.slice(1,2);
                document.getElementById("twoInputBat").value= `${inputTwoBat}`
                let inputThreeBat=ansBat.slice(2,3);
                document.getElementById("threeInputBat").value= `${inputThreeBat}`
                let inputFourBat=ansBat.slice(3,4);
                document.getElementById("fourInputBat").value= `${inputFourBat}`
                let inputFiveBat= ansBat.slice(4,5);
                document.getElementById("fiveInputBat").value= `${inputFiveBat}`
                let inputSixBat=ansBat.slice(5,6);
                document.getElementById("sixInputBat").value= `${inputSixBat}`
                let inputSevenBat=ansBat.slice(6,7);
                document.getElementById("sevenInputBat").value= `${inputSevenBat}`
                let inputEigthBat=ansBat.slice(7,8);
                document.getElementById("eigthInputBat").value= `${inputEigthBat}`
                let inputNineBat=ansBat.slice(8,9);
                document.getElementById("nineInputBat").value= `${inputNineBat}`
                let inputTenBat=ansBat.slice(9,10);
                document.getElementById("tenInputBat").value= `${inputTenBat}`                  
                });

                
                document.getElementById("btnNumberNine" ).addEventListener("click",()=>{
                    let numberNine=document.getElementById("numberNine").value.toUpperCase();
                   
                    let number=parseInt( document.getElementById("numbers").value);
                  //  let textCipher= "";            
//llamar fucion cipher
window.cipher.encode(numberNine,number);
let ansNumberNine= window.cipher.encode(numberNine,number);
                    let inputOneNumberNine= ansNumberNine.slice(0,1);
                    document.getElementById("oneInputNumberNine").value= `${inputOneNumberNine}`
                    let inputTwoNumberNine=ansNumberNine.slice(1,2);
                    document.getElementById("twoInputNumberNine").value= `${inputTwoNumberNine}`
                    let inputThreeNumberNine=ansNumberNine.slice(2,3);
                    document.getElementById("threeInputNumberNine").value= `${inputThreeNumberNine}`
                    let inputFourNumberNine=ansNumberNine.slice(3,4);
                    document.getElementById("fourInputNumberNine").value= `${inputFourNumberNine}` 
                    let inputFiveNumberNine= ansNumberNine.slice(4,5);
                    document.getElementById("fiveInputNumberNine").value= `${inputFiveNumberNine}`
                    });

                    document.getElementById("btnTraffic" ).addEventListener("click",()=>{
                        let traffic=document.getElementById("traffic").value.toUpperCase();
                        let number=parseInt( document.getElementById("numbers").value);
                       // let textCipher= "";
//llamar fucion cipher
window.cipher.encode(traffic,number);
let ansTraffic= window.cipher.encode(traffic,number);
                        let inputOneTraffic= ansTraffic.slice(0,1);   
                        document.getElementById("oneInputTraffic").value= `${inputOneTraffic}`
                        let inputTwoTraffic=ansTraffic.slice(1,2);
                        document.getElementById("twoInputTraffic").value= `${inputTwoTraffic}`
                        let inputThreeTraffic=ansTraffic.slice(2,3);
                        document.getElementById("threeInputTraffic").value= `${inputThreeTraffic}`
                        let inputFourTraffic=ansTraffic.slice(3,4);
                        document.getElementById("fourInputTraffic").value= `${inputFourTraffic}` 
                        let inputFiveTraffic= ansTraffic.slice(4,5);
                        document.getElementById("fiveInputTraffic").value= `${inputFiveTraffic}`
                        let inputSixTraffic=ansTraffic.slice(5,6);
                        document.getElementById("sixInputTraffic").value= `${inputSixTraffic}`
                        let inputSevenTraffic=ansTraffic.slice(6,7);
                        document.getElementById("sevenInputTraffic").value= `${inputSevenTraffic}`
                        let inputEigthTraffic=ansTraffic.slice(7,8);
                        document.getElementById("eigthInputTraffic").value= `${inputEigthTraffic}`                 
                         });
                        document.getElementById("btnDecodeThree").addEventListener("click",()=>{
                            let ansOneCodeThree=document.getElementById("oneCodeThree").value.toUpperCase();        
                            let ansTwoCodeThree=document.getElementById("twoCodeThree").value.toUpperCase();
                            let ansThreeCodeThree=document.getElementById("threeCodeThree").value.toUpperCase();
                            let ansFourCodeThree=document.getElementById("fourCodeThree").value.toUpperCase();
                            let ansFiveCodeThree=document.getElementById("fiveCodeThree").value.toUpperCase();
                            let ansSixCodeThree=document.getElementById("sixCodeThree").value.toUpperCase();
                            let ansSevenCodeThree=document.getElementById("sevenCodeThree").value.toUpperCase();
                            let ansEigthCodeThree=document.getElementById("eigthCodeThree").value.toUpperCase();
                            let ansNineCodeThree=document.getElementById("nineCodeThree").value.toUpperCase();
                            let ansTenCodeThree=document.getElementById("tenCodeThree").value.toUpperCase();
                            let ansElevenCodeThree=document.getElementById("elevenCodeThree").value.toUpperCase();
                           
                    
                            let number=parseInt( document.getElementById("numbers").value);
                         //   let textCipherThreeCode= "";
//llamar funcion decde
window.cipher.decode(ansOneCodeThree,number)
let ansOneCodeThreeCipher= window.cipher.decode(ansOneCodeThree,number);
window.cipher.decode(ansTwoCodeThree,number)
let ansTwoCipherThreeCode= window.cipher.decode(ansTwoCodeThree,number);
window.cipher.decode(ansThreeCodeThree,number)
let ansThreeCipherThreeCode= window.cipher.decode(ansThreeCodeThree,number);
window.cipher.decode(ansFourCodeThree,number)
let ansFourCipherCodeThree= window.cipher.decode(ansFourCodeThree,number);
window.cipher.decode(ansFiveCodeThree,number)
let ansFiveCipherCodeThree= window.cipher.decode(ansFiveCodeThree,number);
window.cipher.decode(ansSixCodeThree,number)
let ansSixCipherCodeThree= window.cipher.decode(ansSixCodeThree,number);
window.cipher.decode(ansSevenCodeThree,number)
let ansSevenCipherCodeThree= window.cipher.decode(ansSevenCodeThree,number);
window.cipher.decode(ansEigthCodeThree,number)
let ansEigthCipherCodeThree= window.cipher.decode(ansEigthCodeThree,number);
window.cipher.decode(ansNineCodeThree,number)
let ansNineCipherCodeThree= window.cipher.decode(ansNineCodeThree,number);
window.cipher.decode(ansTenCodeThree,number)
let ansTenCipherCodeThree= window.cipher.decode(ansTenCodeThree,number);
window.cipher.decode(ansElevenCodeThree,number)
let ansElevenCipherCodeThree= window.cipher.decode(ansElevenCodeThree,number);
                    
                                document.getElementById("MensaggeThreeSecret").innerHTML=`${ansOneCodeThreeCipher}${ansTwoCipherThreeCode}${ansThreeCipherThreeCode}${ansFourCipherCodeThree}${'&nbsp;'}${ansFiveCipherCodeThree}${ansSixCipherCodeThree}${'&nbsp;'}${ansSevenCipherCodeThree}${ansEigthCipherCodeThree}${ansNineCipherCodeThree}${ansTenCipherCodeThree}${ansElevenCipherCodeThree}`
                            document.getElementById("hideThree").style.display= "none"
                            });
           document.getElementById("pagFive").style.display= "none";

           document.getElementById("end").addEventListener("click",()=>{
               document.getElementById("pagSeven").style.display= "block";
               document.getElementById("pagSeven").innerHTML=`<h1 id="titleEnd"><STRong> F E L I C I T A C I O N E S</STRong></h1>
               <p>${nameUser.toUpperCase()}, fuiste de gran ayuda, eres una personita muy inteligente
               muchas gracias!!!!</p>

               <button id="back">VOLVER A JUGAR</a></button>`
               document.getElementById("pagSix").style.display= "none";
                document.getElementById("back").addEventListener("click",()=>{
                    //console.log("queda poquito");
                    document.getElementById("pagOne").style.display="block";
                    document.getElementById("pagSeven").style.display="none";
             });
           })
                });       
            });
        });
    })
});