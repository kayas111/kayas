export function QtoolNav(){
    let style1={padding:"5px"}
    return(<div style={{display:"flex",flexWrap:"wrap"}}>

        <div style={style1}>
            <a href="/pages/qtool/qtoolhome"><div class="button1">Join queue</div></a>
                   
        </div>
        <div style={style1}><a href="/pages/admin/addteller"><div class="button1">Add/delete teller</div></a></div>
        <div style={style1}><a href="/pages/qtool/requestforclient"><div class="button1">Request for client</div></a></div>
        

        

    </div>)
}

export default QtoolNav