import Alert from '../components/common/alert';
import Loader from '../components/common/loader';



class App  extends React.Component {

	/**
	*  render child components.
	**/
  	render() {
  		return (
  			<div>
  			<Alert/>
  			<Loader/>
  			{this.props.children}
  			</div>
  		)
  }
};