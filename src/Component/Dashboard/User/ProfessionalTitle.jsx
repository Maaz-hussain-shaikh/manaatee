import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PageHeader from '../Pageheader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfessionalTitle = () => {
  const URL = "https://manaatee.cyberelite.work/manaatee/Api/masters/professional_title?id=0"
  const [data, setdata] = useState();
  const [apiSuccess, setApiSuccess] = useState(false);
  const [editIndex, setEditIndex] = useState(null)
  const [updatedata, setupdatedata] = useState({
    consult_category_name: "",
    consult_category_audio_fee: "",
    consult_category_video_fee: "",
  })
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
          }
        });

        if (response.data.status === true) {
          console.log(response.data)
          setdata(response.data.data)
        } else {
          setdata(response.data.mass)
          
        }

      } catch (error) {

        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    fetchdata();

  }, [apiSuccess])
  const handleEditClick = (index) => {
    if (editIndex === index) {
      setEditIndex(null)

    } else {
      setEditIndex(index);

    }
  };
  const handeleupdate = (id) => {
    console.log(updatedata)
    const update = async () => {
      const loadingToastId = toast.loading("Updating Professional Title...", {
        position: "top-center",
      });
      try {
        const response = await axios.post("https://manaatee.cyberelite.work/manaatee/Api/masters/add_professional_title", {
          "consult_category_name": updatedata.consult_category_name,
          "consult_category_audio_fee": updatedata.consult_category_audio_fee,
          "consult_category_video_fee": updatedata.consult_category_video_fee,
          "id": id
        }, {
          headers: {
            authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
          }
        });

        if (response.data.status === true) {
          console.log(response)
          setApiSuccess(!apiSuccess)
          setEditIndex(null)
          setupdatedata({})
          toast.update(loadingToastId, {
            render: response.data.message,
            type: "success",
            isLoading: false,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

          });

        } else {
          toast.update(loadingToastId, {
            render: "Please check your internet connection and try again",
            type: "error",
            isLoading: false,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
    
          });
          console.log(response)
        }

      } catch (error) {

        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    update()
  }
  const deleteTitle = (id) => {
    const deletedata = async () => {
      const loadingToastId = toast.loading("Delete Specilization...", {
        position: "top-center",
      });
      try {
        const response = await axios.get(`https://manaatee.cyberelite.work/manaatee/Api/masters/delete_professional_title?id=${id}`, {
          headers: {
            authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
          }
        });

        if (response.data.status === true) {
          console.log(response)
          setApiSuccess(!apiSuccess)
          setEditIndex(null)
          toast.update(loadingToastId, {
            render: response.data.message,
            type: "success",
            isLoading: false,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

          });

        } else {
          toast.update(loadingToastId, {
            render: "Please check your internet connection and try again",
            type: "error",
            isLoading: false,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
    
          });
          console.log(response)
          
        }

      } catch (error) {

        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    deletedata()
  }
  const handleChange = (e) => {
    let name = e.target.name
    let val = e.target.value
    setupdatedata({ ...updatedata, [name]: val })
  };
  return (
    <>
      <div className="mt-4 mx-4">
        <PageHeader name="Professional Title" path="Home" path2="Professional Title" />
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <button
              className="self-start mb-2 md:mt-0 px-3 py-1 text-white bg-green-600 rounded-md hover:bg-green-700" onClick={() => handleEditClick("add")}
            ><p><i className="fa-solid fa-plus"></i> Add New Title</p></button>

            {editIndex === "add" && (

              <div colSpan="4" className="bg-gray-50 dark:bg-gray-800 p-3 border-t">
                <div
                  className="flex flex-col md:flex-row gap-6"
                >
                  {/* Name Input */}
                  <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600">Category Name</label>
                    <input
                      type="text"
                      name='consult_category_name'
                      value={updatedata.consult_category_name}
                      className="mt-1 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Add Category Name"
                      onChange={handleChange}

                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600">Audio Fee</label>
                    <input
                      type="number"
                      name='consult_category_audio_fee'
                      value={updatedata.consult_category_audio_fee}
                      className="mt-1 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Add Audio Fee"
                      onChange={handleChange}

                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600">Video Fee</label>
                    <input
                      type="number"
                      name='consult_category_video_fee'
                      value={updatedata.consult_category_video_fee}
                      className="mt-1 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Add Video fee"
                      onChange={handleChange}
                      
                    />
                  </div>

                  {/* Update Button */}
                  <button

                    className="self-start mt-4 md:mt-0 px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                    onClick={() => handeleupdate(0)}

                  >
                    Update
                  </button>
                </div>
              </div>


            )}
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b darkkborder-gray-700 bg-gray-50 darkktext-gray-400 darkkbg-gray-800">
                  <th className="px-4 py-3">Category Name</th>
                  <th className="px-4 py-3">Audio Fee </th>
                  <th className="px-4 py-3">Video Fee</th>
                  <th className="px-4 py-3">Edit/delete </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y darkkdivide-gray-700 darkkbg-gray-800">
                {data?.length > 0 ? (
                  <>
                    {
                      data?.map((elem, index) => {

                        return (
                          <React.Fragment key={index}>
                            <tr className="bg-gray-50 darkkbg-gray-800 hover:bg-gray-100 darkkhover:bg-gray-900 text-gray-700 darkktext-gray-400" >
                              <td className="px-4 py-3">
                                <div className="flex items-center text-sm">

                                  <div>
                                    <p className="font-semibold">{data[index].consult_category_name}</p>

                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm">{data[index].consult_category_audio_fee}</td>
                              <td className="px-4 py-3 text-sm">{data[index].consult_category_video_fee}</td>

                              <td className="text-center">
                                <button
                                  className="px-2 py-1 mr-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                  onClick={() => handleEditClick(index)}
                                >
                                  Edit
                                </button>

                                <button
                                  className="px-2 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                                  onClick={() => deleteTitle(data[index].id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                            {editIndex === index && (
                              <tr>
                                <td colSpan="4" className="bg-gray-50 dark:bg-gray-800 p-3 border-t">
                                  <div
                                    className="flex flex-col md:flex-row gap-6"
                                  >
                                    {/* Name Input */}
                                    <div className="flex flex-col w-full">
                                      <label className="text-sm font-medium text-gray-600">Category Name</label>
                                      <input
                                        type="text"
                                        name='consult_category_name'
                                        value={updatedata.consult_category_name}
                                        className="mt-1 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Update Category Name"
                                        onChange={handleChange}

                                      />
                                    </div>
                                    <div className="flex flex-col w-full">
                                      <label className="text-sm font-medium text-gray-600">Audio Fee</label>
                                      <input
                                        type="number"
                                        name='consult_category_audio_fee'
                                        value={updatedata.consult_category_audio_fee}
                                        className="mt-1 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Update Audio Fee"
                                        onChange={handleChange}

                                      />
                                    </div>
                                    <div className="flex flex-col w-full">
                                      <label className="text-sm font-medium text-gray-600">Video Fee</label>
                                      <input
                                        type="number"
                                        name='consult_category_video_fee'
                                        value={updatedata.consult_category_video_fee}
                                        className="mt-1 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Update Video fee"
                                        onChange={handleChange}
                                        
                                      />
                                    </div>

                                    {/* Update Button */}
                                    <button

                                      className="self-start mt-4 md:mt-0 px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                                      onClick={() => handeleupdate(data[index].id)}

                                    >
                                      Update
                                    </button>
                                  </div>
                                </td>
                              </tr>

                            )}

                          </React.Fragment>
                        )
                      })
                    }
                  </>
                ) : (
                  <tr>
                    <td><p>Loading...</p></td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>

        </div>
      </div>

    </>
  )
}

export default ProfessionalTitle
