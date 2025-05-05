import { useContext, useEffect, useState, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrderData = useCallback(async () => {
    try {
      setLoading(true);
      if (!token) {
        setLoading(false);
        return null;
      }
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            item['orderId'] = order._id || Math.random().toString(36).substring(7);
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Failed to load orders");
      setLoading(false);
    }
  }, [backendUrl, token]);

  useEffect(() => {
    loadOrderData();
  }, [loadOrderData]);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-500';
      case 'shipped':
        return 'bg-blue-500';
      case 'processing':
        return 'bg-yellow-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="pt-8 border-t border-navy-200">
      <div className="mb-6 text-2xl">
        <Title text1={"MY "} text2={" ORDERS"} />
      </div>
      
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-8 h-8 border-4 rounded-full border-navy-600 border-t-transparent animate-spin"></div>
        </div>
      ) : orderData.length === 0 ? (
        <div className="py-16 text-center rounded-lg bg-navy-50">
          <svg className="w-16 h-16 mx-auto text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <p className="mt-4 text-lg text-navy-700">No orders found</p>
          <button className="px-6 py-2 mt-4 text-white transition-colors rounded-md bg-navy-700 hover:bg-navy-800">
            Browse Products
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {orderData.map((item, index) => (
            <div 
              key={index} 
              className="overflow-hidden transition-shadow border rounded-lg shadow-sm border-navy-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between px-4 py-2 bg-navy-50">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-navy-600">Order ID:</span>
                  <span className="text-xs font-medium text-navy-800">{item.orderId}</span>
                </div>
                <div className="text-xs text-navy-600">
                  {formatDate(item.date)}
                </div>
              </div>
              
              <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-20 h-20 overflow-hidden border rounded-md border-navy-100">
                    <img className="object-cover w-full h-full" src={item.image[0]} alt={item.name} />
                  </div>
                  
                  <div>
                    <p className="font-medium text-navy-900">{item.name}</p>
                    <div className="grid grid-cols-2 mt-1 text-sm text-navy-700 gap-x-6 gap-y-1">
                      <p className="font-medium">{currency}{item.price}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                      <p>Payment: {item.paymentMethod}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-4 mt-2 md:justify-end md:mt-0">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${getStatusColor(item.status)}`}></div>
                    <p className="text-sm font-medium text-navy-800">{item.status}</p>
                  </div>
                  
                  <button 
                    onClick={() => toast.info(`Tracking info for order ${item.orderId}`)} 
                    className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-navy-700 hover:bg-navy-800"
                  >
                    Track Order
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between px-4 py-2 border-t bg-navy-50 border-navy-200">
                <button className="text-xs text-navy-600 hover:text-navy-800">Need Help?</button>
                <button className="text-xs text-navy-600 hover:text-navy-800">View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;