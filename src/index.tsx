import React, { useState } from "react"

type typename = {
    FlexDirection: "row" | "column" | "row-reverse" | "column-reverse",
    JustifyContent: string,
    BgColor: string,
    BorderRadius: number,
    InputBgColor: string,
    InputBorderRadius: number,
    InputHeight: number,
    InputWidth: number,
    InputMargin: number,
    InputText: string,
    ButtonBgColor: string,
    ButtonBorderRadius: number,
    ButtonHeight: number,
    ButtonWidth: number,
    ButtonMargin: number,
    ButtonText: string,
    Src: string,
    ImgMarginBottom: number,
}
export default function QrCode(props:typename){

    const [value, setValue] = useState("")
    const [qrCodeSrc, SetQrCodeSrc] = useState(props.Src)
    const [visibleImg, setVisibleImg] = useState(false)

    function onChange(event: React.ChangeEvent<HTMLInputElement>){
        setValue(event.target.value);
    }

    function click(event: React.MouseEvent<HTMLButtonElement>){
        SetQrCodeSrc(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`)
        event.preventDefault()
        setVisibleImg(!visibleImg)

    }

    return (
        <div style={{
            flexDirection: props.FlexDirection || 'column', 
            justifyContent: props.JustifyContent || 'center', 
            backgroundColor: props.BgColor || '#e6e6e6', 
            borderRadius: props.BorderRadius || 20
        }}>
        <label>
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems:'center'
            }}>
                <input 
                    value={value} 
                    onChange={onChange} 
                    style={{
                    backgroundColor:props.InputBgColor || '#cecdcd' ,
                    border: 'none', borderRadius: props.InputBorderRadius || 10, 
                    height: props.InputHeight || 35, 
                    width: props.InputWidth || 150, 
                    margin: props.InputMargin || 3
                    }} 
                    placeholder={props.InputText || 'Put the qr code here!'}
                />
                <button 
                    onClick={click} 
                    style={{
                        backgroundColor:props.ButtonBgColor || '#cecdcd', 
                        border: 'none', 
                        borderRadius: props.ButtonBorderRadius || 50, 
                        height: props.ButtonHeight || 50, 
                        width: props.ButtonWidth || 100, 
                        margin: props.ButtonMargin || 30
                    }}
                >
                    {props.ButtonText || 'Generate'}</button>
            </div>
        </label>
            <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                {visibleImg && <img id='qrCode' src={qrCodeSrc} alt='QR Code' style={{marginBottom: props.ImgMarginBottom || 10}}/>}
            </div>
        </div>
    )
  };