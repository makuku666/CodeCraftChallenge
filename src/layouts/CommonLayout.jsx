import Navbar from 'components/Navbar/Navbar'

const CommonLayout = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <Navbar />
      {children}
    </div>
  )
}

export default CommonLayout
