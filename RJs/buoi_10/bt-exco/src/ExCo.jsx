import React,{Component} from "react";

class Exco extends Component{
    constructor(props){
        super(props);
        this.state = {
            showInfo: false
        };
    }
    
    btnShow = () => {
        this.setState({showInfo:true})
    }

    btnHide = () => {
        this.setState({showInfo:false})
    }

    render(){
        const {showInfo} = this.state;
        if(showInfo) return (
            <div>
                <h1>Conditional rendering</h1>
                <button onClick={this.btnHide}>Dong gioi thieu</button>
                <p>Như các bạn đã biết thì thư viện ReactJs giúp chúng ta tạo ra các component và từ các component đó chúng ta có thể xây dựng thành các view giao diện, bản thân ReactJs không hỗ trợ Router vậy nên hôm nay mình xin giới thiệu một thư viện hỗ trợ công việc này đó là: react-router</p>
            </div>
        )
        return(
            <div>
                <h1>Conditional rendering</h1>
                <button onClick={this.btnShow}>Xem gioi thieu</button>
            </div>
        )
    }
}
export default Exco;