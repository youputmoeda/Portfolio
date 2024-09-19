import UnityComponent from "../components/UnityComponent";

const Home = () => {
	return (
		<>
			<div style={{
				height: '400vh'
			}}>
				<UnityComponent />
				<div style={{ marginTop: '300vh' }}>
					<div>Welcome!</div>
					<div>This is my Portfolio!</div>
				</div>
			</div>
		</>
	)
}

export default Home;