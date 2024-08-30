function Post(){
    const [data, setData] = React.useState({});
    const [dataArray, setDataArray] = React.useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        setData({ ...data, [name]: e.target.value });     
    }

    const handleClick = () => {
        // setDataArray([...dataArray, data]);
        // console.log([...dataArray, data]);

        axios.put('https://fakestoreapi.com/products/20',data)
        .then((res)=>{
            console.log('resorce',res.data)
        })
        .catch((err)=>{
            console.log('error',err)
        })
    }
 console.log(data)}