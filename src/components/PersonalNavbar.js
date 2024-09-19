import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PersonalNavbar.css";

const PersonalNavbar = () => {
	const navigate = useNavigate();

	const handleNavigation = (path) => {
		navigate(path)
	}

	return (
		<div className="navbar">
			<Container fluid>
				<Button
					className="navbar-Button"
					onClick={() => handleNavigation('/')}
				>
					Home
				</Button>
				<Button
					className="navbar-Button"
					onClick={() => handleNavigation('/about')}
				>
					About
				</Button>
				<Button
					className="navbar-Button"
					onClick={() => handleNavigation('/contacts')}
				>
					Contacts
				</Button>
				<Button
					className="navbar-Button"
					onClick={() => handleNavigation('/projects')}
				>
					Projects
				</Button>
			</Container>
		</div>
	)
}

export default PersonalNavbar;