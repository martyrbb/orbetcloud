import { ImageResponse } from "next/og";
export const alt="Orbet — the platform for leisure venues";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:80,background:"#0d0f12",color:"#fff",fontFamily:"sans-serif"}}><div style={{fontSize:48,color:"#C8FF00",fontWeight:700,marginBottom:60}}>orbet</div><div style={{fontSize:66,fontWeight:700,display:"flex",flexDirection:"column"}}><span>The platform built</span><span style={{color:"#C8FF00"}}>for leisure venues.</span></div><div style={{fontSize:26,color:"#a1a1aa",marginTop:36}}>Bookings. Customers. Sales. Operations.</div></div>,size);}
