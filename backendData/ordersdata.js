import { products } from "./products.js";

export let orders = JSON.parse(localStorage.getItem('orders'));
if(!orders){
    orders = 
    [{
        orderId: "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
        orderDate: "August 12",
        totalCost: 207130,
        items:
        [{
            id: "dhbd55151-sub52136-wiuib845-apn-5326gdv",
            quantity: 1,
            arrivingDate: "August 15" 
        },
        {
            id: "qpwon2103-mnbj5646-jhsfvj84-sgvfsh42",
            quantity: 1,
            arrivingDate: "August 15"
        }]
    },
    {
        orderId: "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
        orderDate: "August 12",
        totalCost: 207130,
        items:
        [{
            id: "dhbd55151-sub52136-wiuib845-apn-5326gdv",
            quantity: 1,
            arrivingDate: "August 15" 
        }]
    }]
}
export function saveToLocalStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}