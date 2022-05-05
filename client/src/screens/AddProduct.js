import React ,{useState} from 'react';
import { addProduct } from "../actions/productActions";
import { useDispatch , useSelector } from 'react-redux'
export default function Addproduct() {
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [prices,setPrices]=useState("");
    const [saleprice,setSalePrice]=useState("")
    const [category,setCategory]=useState("")
    const [image,setImage]=useState("")
    const [list,setList]=useState([])
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const product={name,description,prices,saleprice,category,image}
        console.log(product)
        dispatch(addProduct(product));
        
    }
    const addproductstate = useSelector(state=>state.addProductReducer)
    const {loading} = addproductState;
    React.useEffect(() => {
    dispatch(addProduct());
  }, []);
    return (
        <div className="addForm">

        <form onSubmit={handleSubmit}>
        {loading}
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <label>Description</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={prices} onChange={(e)=>setPrices(e.target.value)}/>
            </div>
            <div>
                <label>Saleprice</label>
                <input type="number" value={saleprice} onChange={(e)=>setSalePrice(e.target.value)}/>
            </div>
            <div>
                <label>Category</label>
                <input value={category} placeholder="Vegetables or Fruits" onChange={(e)=>setCategory(e.target.value)}>
                </input>
            </div>
            <div>
                <label>Image link</label>
                <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>

        </div>
    )
}




 

