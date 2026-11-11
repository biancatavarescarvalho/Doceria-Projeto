window.addEventListener("load", function() 
{
    document.getElementById('a1').addEventListener("click", calculoAd);
    document.getElementById('a2').addEventListener("click", calculoAd); 
    document.getElementById('a3').addEventListener("click", calculoAd);
    document.getElementById('a4').addEventListener("click", calculoAd);
    document.getElementById('a5').addEventListener("click", calculoAd);
    document.getElementById('a6').addEventListener("click", calculoAd);
    document.getElementById('a7').addEventListener("click", calculoAd);
    document.getElementById('a8').addEventListener("click", calculoAd);
    document.getElementById('a9').addEventListener("click", calculoAd);
    document.getElementById('s1').addEventListener("click", calculoSub);
    document.getElementById('s2').addEventListener("click", calculoSub);
    document.getElementById('s3').addEventListener("click", calculoSub);
    document.getElementById('s4').addEventListener("click", calculoSub);
     document.getElementById('s5').addEventListener("click", calculoSub);
     document.getElementById('s6').addEventListener("click", calculoSub);
     document.getElementById('s7').addEventListener("click", calculoSub);
     document.getElementById('s8').addEventListener("click", calculoSub);
     document.getElementById('s9').addEventListener("click", calculoSub);
     document.getElementById('final').addEventListener("click", finalCompra);
                                                          });
     let totalValor=0;

                                      
     function calculoAd(event)
                                               
     {
                                                      
        let button = event.target.id;
                                                                  
                                                          
     if (button=='a1')
                                                                
        {
                                                                            
          totalValor=totalValor+12.00
          document.getElementById('total').innerHTML="R$"+totalValor
                                                                                  
        }                                                                                  
         else if (button=='a2')
                                                                                 
        {
            totalValor=totalValor+13.50
            document.getElementById('total').innerHTML="R$"+totalValor
                                                                                                                              
                                                                                                                         
       }
                                                                                                                              
         else if (button=='a3')
                                                                                                                                  
      {
                                                                                                                                            
         totalValor=totalValor+13.00
                                                                                                                                             
         document.getElementById('total').innerHTML="R$"+totalValor
                                                                                                                                                     
      }
                                                                                                                                                      
      else if (button=='a4')
                                                                                                                                                        
     {
                                                                                                                                                                
      totalValor=totalValor+15.00
      document.getElementById('total').innerHTML="R$"+totalValor
                                                                                                                                                                             
      }
                                                                                                         
    else if(button=='a5')
                                                                                            
   {
                                                                                                 
    totalValor=totalValor+13.50
    document.getElementById('total').innerHTML="R$"+totalValor
                                                                                          
  }
                                                                                        
    else if (button=='a6')
                                                                                 
 {
                                                                                     
   totalValor=totalValor+11.50
   document.getElementById('total').innerHTML="R$"+totalValor
                                                                                    
}
                                                                                     
 else if(button=='a7')
                                                                            
{
                                                                        
     totalValor=totalValor+11.50
     document.getElementById('total').innerHTML="R$"+totalValor
                                                                             
}
                                                                                   
else if (button=='a8')
                                                                                  
{
                                                                              
    totalValor=totalValor+14.00
    document.getElementById('total').innerHTML="R$"+totalValor
                                                                                  
}
                                                                                  
else if(button=='a9')
                                                                                 
{
                                                                              
   totalValor=totalValor+16.00
   document.getElementById('total').innerHTML="R$"+totalValor
                                                                                    
}}
function calculoSub(event)
{
    let button = event.target.id;

     if (button=='s1')
      { 
        totalValor=totalValor-12.00
        document.getElementById('total').innerHTML="R$"+totalValor
      }
     else if(button=='s2')
     {
       totalValor=totalValor-13.50
       document.getElementById('total').innerHTML="R$"+totalValor
   }
                                     
   else if(button=='s3')
                                      
    {
                   
        totalValor=totalValor-13.00        
        document.getElementById('total').innerHTML="R$"+totalValor
                   
    }
                   
    else if(button=='s4')
                 
    {
                   
          totalValor=totalValor-15.00        
          document.getElementById('total').innerHTML="R$"+totalValor
                 
  
      }
               
        else if(button=='s5')
                
      {
                
           totalValor=totalValor-13.50
           document.getElementById('total').innerHTML="R$"+totalValor
       }
             
         else if(button=='s6')
          
       {
         totalValor=totalValor-11.50
         document.getElementById('total').innerHTML="R$"+totalValor                  
                                                                                                                              }
      else if(button=='s7')
        
        {
        
          
            totalValor=totalValor-11.50
            
            document.getElementById('total').innerHTML="R$"+totalValor
            
                                                                                                                                                                      
        }
            
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        else if (button=='s8')
                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
{
                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      totalValor=totalValor-14.00                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      document.getElementById('total').innerHTML="R$"+totalValor
                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  }
                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
     else if (button=='s9')
                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  {                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
     totalValor=totalValor-16.00                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
     document.getElementById('total').innerHTML="R$"+totalValor
                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
 }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}
function finalCompra(event)
{
    let button = event.target.id;
     sabor=document.getElementsByClassName('sabor').value
            
     when(button=='final')
 {
                         
  pag= prompt("Digite a forma de pagamento:(cartão ou pix)");
                                 
  if (pag=='cartão')
                                      
    {
                                                  
      num=Number(prompt("Digite o número do cartão:"));
                                                            
    }
                                                               
    else if (pag=='pix')
                                                                         
      {
                                                                                   
        pix= prompt("O código pix é:000000,Pagamento realizado?");
                                                                    
      }
                                                          
      else
                                                         
        {
                                                       
          alert("Forma de pagamento não aceita")
                                                       
        }
                                                       
        document.getElementById('total').innerHTML="Volte sempre"
                                                           
        
                                                          
      }
                                                       
    }