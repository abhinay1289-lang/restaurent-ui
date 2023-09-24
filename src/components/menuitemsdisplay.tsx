

const menuitemsdisplay = () => {
    const headers = [
        {
            id: 'Starters',
            label: 'Starters',
        },
        {
            id: 'Fried Rice & Noodles',
            label: 'Fried Rice & Noodles',
        },
        {
            id: 'Rice',
            label: 'Rice',
        },
        {
            id: 'Rotis',
            label: 'Rotis',
        },
        {
            id: 'Biryani',
            label: 'Biryani',
        },
        {
            id: 'Curries',
            label: 'Curries',
        }     
    ]
    return (
        <div className="menu" style={{display:'flex'}}>
            <div style={{ position: 'absolute', marginTop: '450px', marginLeft: '60%'}}>
                <h2 style={{fontFamily:'sans-serif',color:'red',fontSize:'20px'}}>Biryani</h2>
                <img src={require('../assets/biryani.png')} alt='Peopletech-Group' height={80} />
            </div>
            <div style={{ position: 'absolute',marginTop:'30%', marginLeft: '90px'}}>
            <h2 style={{fontFamily:'sans-serif',color:'red',fontSize:'20px'}}>Curries</h2>
                <img src={require('../assets/curries.png')} alt='Peopletech-Group' height={80} />
            </div>
            <div style={{    marginLeft: '350px', marginRight: '20px',marginTop: '23%'}}>
            <h2 style={{fontFamily:'sans-serif',color:'red',fontSize:'20px',marginLeft:'10px'}}>FriedRice & Noodles</h2>
                <img src={require('../assets/friedrice.png')} alt='Peopletech-Group' height={80}/>
            </div>
            <div style={{ marginTop: '5.5%', position: 'absolute', marginLeft: '900px'}}>
            <h2 style={{fontFamily:'sans-serif',color:'red',fontSize:'20px',marginLeft:'14px'}}>Rice</h2>
                <img src={require('../assets/rice.png')} alt='Peopletech-Group' height={80}/>
            </div>
            <div style={{ marginTop: '23%', marginLeft: '100px'}}>
            <h2 style={{fontFamily:'sans-serif',color:'red',fontSize:'20px',marginLeft:'10px'}}>Rotis</h2>
                <img src={require('../assets/rotis.png')} alt='Peopletech-Group' height={80}/>
            </div>
            <div style={{ position: 'absolute', marginRight: '20px', marginLeft: '90px',marginTop: '70px'}}>
            <h2 style={{fontFamily:'sans-serif',color:'red',fontSize:'20px'}}>Starters</h2>
                <img src={require('../assets/starters.png')} alt='Peopletech-Group' height={80}/>
            </div>
        </div>
    );
}

export default menuitemsdisplay;