import styled, {css} from 'styled-components';
import Tooltip from '../Tooltip';


interface ContainerProps{
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}


export const Container = styled.div<ContainerProps>`
      background: #5DF5D4;
      border: 2px solid  #5DF5D4;   
      border-radius: 10px;
      padding: 16px; 
      width:100%;
     
      display:flex;
      align-items: center;

      & + div{
                margin-top:8px;
            } 


    ${(props) =>
          props.isErrored && css`
          border-color: #c53030; 
      `  
    }

	 ${(props) =>
     props.isFocused && css`
       color:#00c7c7;
       border-color:  #00c7c7; 
      `  
    }
   

   ${(props) =>
        props.isFilled && css`
        color:#00c7c7 ;
        `  
    }


   input{ 
         background: transparent;
         border:0;
         border-color:#fff;
         flex:1; 
         color:  #00c7c7;

            &::placeholder{
                color: #666360;
               
            }
           
         
        }

     svg{
         margin-right: 16px;
        
     }

 
`



export const Error = styled(Tooltip)`
       height: 20px;
       margin-left: 16px; 
       svg{
           margin: 0;
       }

       span{
           background: #c53030;
           color:#fff;
       }
       &::before{
           border-color: #c53030 transparent;
       }
   
      
`