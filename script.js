
calcy=()=>{
    let web=document.getElementById('web').value;
    let dsa=document.getElementById('dsa').value;
    let math=document.getElementById('math').value;
    let aec=document.getElementById('aec').value;
    let totalgrade=parseFloat(web)+parseFloat(dsa)+parseFloat(math)+parseFloat(aec);
    document.getElementById('result').innerHTML=`THE TOTAL GRADES IS ${totalgrade}`;
}
