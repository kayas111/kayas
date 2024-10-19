export function BnplNav(){
    let buttonStyle={padding:"3px"}
    return(<div style={{padding:"3px",display:"flex",flexWrap:"wrap"}}>
        <a href="/pages/admin/bnpl/clearbnpldebt"><div style={buttonStyle}><div class="button1" >Clear BNPL debt</div></div></a>
        <a href="/pages/admin/bnpl/bnpltransactions"><div style={buttonStyle}><div class="button1" >BNPL transactions</div></div></a>


    </div>)
}

export default BnplNav