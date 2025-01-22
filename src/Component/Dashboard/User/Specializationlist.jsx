import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PageHeader from '../Pageheader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Specializationlist = () => {
  const URL = "https://manaatee.cyberelite.work/manaatee/Api/masters/all_specilization"
  const [data, setdata] = useState();
  const[loading,setloading]=useState(true)
  const[error,seterror]=useState(null)
  const [editIndex, setEditIndex] = useState(null)
  const [image, setimage] = useState(null)
  const [editForm, setEditForm] = useState()
  const [apiSuccess, setApiSuccess] = useState(false);
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
          setloading(false)
        } else {
          seterror(response.data.mass)
          setloading(false)
          setdata(response.data.mass)
        }

      } catch (error) {
        seterror("some thing broke")
        setloading(false)
        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    fetchdata();

  }, [apiSuccess])
  const handleEditClick = (index) => {
    if (editIndex === index) {
      setEditIndex(null)
      setimage(null)
    } else {
      setimage(null)
      setEditIndex(index);

    }
  };
  const handeleupdate = (id) => {
    const update = async () => {
      const data = new FormData()
      data.append('image', image)
      data.append('text', editForm)
      data.append('id', id)
      const loadingToastId = toast.loading("Updating Specilization List...", {
        position: "top-center",
      });
      try {
        const response = await axios.post("https://manaatee.cyberelite.work/manaatee/Api/masters/add_specilization", data, {
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
          console.log(response)
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
        }

      } catch (error) {

        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    update()
  }
  const deleteconcernlist = (id) => {
    const deleteconcern = async () => {
      const loadingToastId = toast.loading("Delete Specilization...", {
        position: "top-center",
      });
      try {
        const response = await axios.get(`https://manaatee.cyberelite.work/manaatee/Api/masters/delete_specilization?id=${id}`, {
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
          console.log(response)
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
        }

      } catch (error) {

        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    deleteconcern()
  }
  const handleImageChange = (e) => {
    setimage(e.target.files[0])
  };

  return (
    <> <div className="mt-4 mx-4">
      <PageHeader name="All Specilization List" path="Home" path2="All Specilization List" />
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <button
            className="self-start mb-2 md:mt-0 px-3 py-1 text-white bg-green-600 rounded-md hover:bg-green-700" onClick={() => handleEditClick("add")}
          ><p><i className="fa-solid fa-plus"></i> Add new Specilization</p></button>
          {editIndex === "add" && (
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg shadow-md mt-2">
              <div className="flex flex-col gap-3">

                {/* Name Input */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">Name</label>
                  <input
                    type="text"
                    className="mt-1 p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter new name"
                    onChange={(e) => setEditForm(e.target.value)}
                  />
                </div>

                {/* Image Upload Section */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">Add Image</label>
                  <div
                    className="relative mt-2 flex items-center justify-center w-full h-20 bg-gray-200 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-blue-400" onClick={() => document.getElementById(`image-input-new`).click()}
                  >
                    {image ? (
                      <p className="text-sm text-gray-600">{image.name}</p>
                    ) : (
                      <>
                        <i className="fa-solid fa-file-image text-gray-600 text-2xl mr-2"></i>
                        <p className="text-sm text-gray-600">Click to upload or drag & drop</p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    id="image-input-new"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>

                {/* Update Button */}
                <button

                  className="w-full mt-1 px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-700"
                  onClick={() => { handeleupdate("") }}
                >
                  Add New Specilization
                </button>
              </div>
            </div>
          )}
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b darkkborder-gray-700 bg-gray-50 darkktext-gray-400 darkkbg-gray-800">
                <th className="px-4 py-3">User </th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Edit/delete </th>

              </tr>
            </thead>
            <tbody className="bg-white divide-y darkkdivide-gray-700 darkkbg-gray-800">
              {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="4" className="text-center text-red-500">Error: {error.message || "Please check your internet connection and try again"}</td>
                  </tr>
                ) : data?.length > 0 ? (
                <>
                  {
                    data?.map((elem, index) => {

                      return (<React.Fragment key={index}>
                        <tr className="bg-gray-50 darkkbg-gray-800 hover:bg-gray-100 darkkhover:bg-gray-900 text-gray-700 darkktext-gray-400" >
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img className="object-cover w-full h-full rounded-full" src={data[index].image} alt="" loading="lazy" />
                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                              </div>
                              <div>

                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">{data[index].text}</td>
                          <td className="px-4 py-3 text-xs">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full darkkbg-green-700 darkktext-green-100"> {data[index].status}</span>
                          </td>
                          <td className="text-center">
                            <button
                              className="px-2 py-1 mr-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                              onClick={() => handleEditClick(index)}
                            >
                              Edit
                            </button>

                            <button
                              className="px-2 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                              onClick={() => deleteconcernlist(data[index].id)}
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
                                  <label className="text-sm font-medium text-gray-600">Name</label>
                                  <input
                                    type="text"
                                    className="mt-1 p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter new name"
                                    onChange={(e) => setEditForm(e.target.value)}
                                  />
                                </div>

                                {/* Image Upload */}
                                <div className="flex flex-col w-full">
                                  <label className="text-sm font-medium text-gray-600">Update Image</label>
                                  <div className='relative mt-2 flex items-center justify-center w-full h-8 bg-gray-200 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-blue-400' onClick={() => document.getElementById(`image-input-${index}`).click()}>
                                    {image ? (
                                      <p className="text-sm text-gray-600">{image.name}</p>
                                    ) : (
                                      <>
                                        <i className="fa-solid fa-file-image text-gray-600 text-2xl mr-2"></i>
                                        <p className="text-sm text-gray-600">Click to upload or drag & drop</p>
                                      </>
                                    )}
                                  </div>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    id={`image-input-${index}`}
                                    className="hidden"
                                    onChange={handleImageChange}
                                  />

                                </div>

                                {/* Update Button */}
                                <button

                                  className="self-start mt-4 md:mt-0 px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                                  onClick={() => { handeleupdate(data[index].id) }}
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
                  <td colSpan="4" className="text-center">No data available</td>
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

export default Specializationlist
