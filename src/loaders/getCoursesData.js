
export const coursesData = async () => {
    const coursesDataLoad = await fetch('https://ph-b6-assignmet10-server.vercel.app/courses')
    const allCourses = await coursesDataLoad.json()
  
  
    return { allCourses }
  }