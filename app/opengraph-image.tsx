import { ImageResponse } from "next/og";

export const alt = "Ink Tattoo School Professional Tattoo Fundamentals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{width:"100%",height:"100%",display:"flex",position:"relative",overflow:"hidden",background:"#080808",color:"#f4efe4",padding:"64px",fontFamily:"Arial, Helvetica, sans-serif"}}>
        <div style={{position:"absolute",width:"620px",height:"620px",borderRadius:"50%",border:"2px solid rgba(184,32,46,.38)",right:"-210px",top:"-280px"}} />
        <div style={{position:"absolute",width:"360px",height:"360px",borderRadius:"50%",border:"2px solid rgba(184,115,51,.35)",right:"100px",bottom:"-180px"}} />
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%"}}>
          <div style={{display:"flex",alignItems:"baseline",gap:"18px"}}>
            <span style={{fontSize:"54px",fontWeight:900,letterSpacing:"-4px"}}>INK</span>
            <span style={{fontSize:"21px",letterSpacing:"7px",textTransform:"uppercase",color:"#d8d0c2"}}>Tattoo School</span>
          </div>
          <div style={{display:"flex",flexDirection:"column",width:"860px"}}>
            <span style={{color:"#b87333",fontSize:"21px",letterSpacing:"6px",textTransform:"uppercase"}}>Manchester, New Hampshire</span>
            <div style={{fontSize:"78px",lineHeight:.92,fontWeight:900,letterSpacing:"-5px",textTransform:"uppercase",marginTop:"20px"}}>Professional Tattoo Fundamentals</div>
          </div>
          <div style={{display:"flex",gap:"56px",fontSize:"24px",textTransform:"uppercase",letterSpacing:"3px",color:"#d8d0c2"}}>
            <span>12 Weeks</span><span>144 Hours</span><span>$8,750 Tuition</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
