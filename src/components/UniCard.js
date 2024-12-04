function UniCard({name,webPages,country,stateProvince}){

    const handleDownload = async()=> {
        alert('handling download');
    }

    return(
        <>
            <div style={{margin: '7px',height:'35vh', width:'35vh', backgroundColor: '#BBDEFB',display:'flex', flexDirection:'column', border: '1px solid black'}}>
                <h1 style={{flexGrow:2}}>{name}</h1>
                {/* <image style={{backgroundColor: '#808080',flexGrow:2}} url='' alternateText='image of university'/> */}
                <button style={{backgroundColor: '#FFFFFF',flexGrow:0.5, borderStyle: 'none'}} onClick={handleDownload}>Download</button>
            </div>
        </>
    );
}

export default UniCard;