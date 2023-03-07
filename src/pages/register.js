import { Button, FormControl, TextField } from "@mui/material";
import styled from "@emotion/styled";
import Select from "@mui/material";
import MenuItem from "@mui/material";
const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & label{
    color:gray;
    margin-left:10px;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
        border: 1px solid #424242;
        
    }
    color:white;
    border-radius:30px;
    padding-left:10px;
    padding-right:10px;
    &.Mui-focused
    {
        background:#424242;
    }
  }
  & .MuiOutlinedInput-root {
    & fieldset {
        border: 1px solid #424242;
    },
    &:hover fieldset {
        border: 1px solid #424242;
      }
  }
`;
export default ()=>{
    const getData=(event)=>{
        event.preventDefault();
        let form=document.getElementById('rform');
        let formData=[];
        let check=true;
        for(let i=0;i<form.length-1;i++)
        {   if(check)
            {
                formData.push(form[i].value);
                check=!check;
            }
            else
            {
                check=!check;
                continue;
            }
        }
        console.log(formData);
        form.reset();
        // window.alert("Registered");
    }
    return (
        <div className="bg-[#1b1b1b] h-screen flex justify-center items-center">
            <div className="shadow-[inset_0_0_5px_1px_black] bg-[#242424] rounded-3xl p-5 h-1/2 md:h-auto md:w-[70%] w-1/2 flex items-center justify-center flex-col">
                Registration Form
                <form id="rform" onSubmit={getData} className="mt-8 mx-5 border-[0px] border-yellow-50 grid gap-y-4 gap-x-2 items-center justify-center">
                <WhiteBorderTextField required variant="outlined" label="Name" />
                <WhiteBorderTextField required variant="outlined" label="College" />
                <WhiteBorderTextField required variant="outlined" label="Phone Number" type="text" inputProps={{ pattern: "[0-9]*" }}/>
                <WhiteBorderTextField required variant="outlined" label="Address" />
                <WhiteBorderTextField required variant="outlined" label="Graduation Year" type="number" defaultValue={2025}/>
                <WhiteBorderTextField required variant="outlined" label="Degree" />
                <button type="submit" 
                className="ml-auto mr-auto mt-10 md:col-span-1 col-span-2 border-[.1px] w-32 h-9 rounded-3xl hover:bg-[white] hover:text-[black]"
                >Register</button>
                </form>
            </div>
        </div>
    )
}