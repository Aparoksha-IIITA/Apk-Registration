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
    border-radius:0px;
    padding-left:10px;
    padding-right:10px;
    height:50px;
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
        window.alert(formData);
        form.reset();
        // window.alert("Registered");
    }
    return (
        <div className="bg-[#0a1929] h-screen flex justify-center items-center">
            <div className="ml-auto md:ml-0 p-1 h-fit md:h-auto md:w-[70%] w-1/2 flex items-center justify-center flex-col">
                <form id="rform" onSubmit={getData} className="mt-8 mx-5 border-[0px] border-yellow-50 grid gap-y-4 gap-x-8 items-center justify-center">
                <div className="text-[#3399ff] my-6 text-5xl font-thin col-span-2 md:col-span-1">
                    Register
                </div>
                <div className="flex flex-col">
                <label className="mb-1 text-sm text-slate-300">Name</label>
                <WhiteBorderTextField required variant="outlined" />
                </div>
                <div className="flex flex-col">
                <label className="mb-1 text-sm text-slate-300">College</label>
                <WhiteBorderTextField required variant="outlined" />
                </div>
                <div className="flex flex-col ">
                <label className="mb-1 text-sm text-slate-300">Phone Number</label>
                <WhiteBorderTextField required variant="outlined" type="text" inputProps={{ pattern: "[0-9]*" }}/>
                </div>
                <div className="flex flex-col">
                <label className="mb-1 text-sm text-slate-300">Address</label>
                <WhiteBorderTextField required variant="outlined" />
                </div>
                <div className="flex flex-col">
                <label className="mb-1 text-sm text-slate-300">Graduation Year</label>
                <WhiteBorderTextField required variant="outlined" type="number" defaultValue={2025}/>
                </div>
                <div className="flex flex-col">
                <label className="mb-1 text-sm text-slate-300">Degree</label>
                <WhiteBorderTextField required variant="outlined" />
                </div>
                <button type="submit" 
                className="md:mr-auto ml-auto mt-10 md:col-span-1 col-span-2 border-[.1px] w-32 h-9 hover:bg-[#3399ff] hover:text-[black] hover:border-0 hover:shadow-[0_0_5px_0_cyan] transition-[backgroundColor_.5s_ease] "
                >Register</button>
                </form>
            </div>
        </div>
    )
}