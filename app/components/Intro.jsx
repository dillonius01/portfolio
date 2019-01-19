import React, { Component } from 'react';
import WeJay from './WeJay';
import RatMap from './RatMap';
import Project from './Project';
import NewsMirror from './NewsMirror';


import BilingualText from '../props/BilingualText';
import ProjectData from '../props/ProjectData';
import Link from '../props/Link';

/* -----------------    STATEFUL REACT COMPONENT     ------------------ */


class Intro extends Component {

	constructor(props) {
		super(props);
		this.state = {
			projects: ['wejay', 'ratmap', 'newsmirror'],
			idx: 0
		};
		this.handleSelectProject = this.handleSelectProject.bind(this);
	}

	handleSelectProject(evt) {
		const idx = +evt.target.value;
		this.setState({ idx });
	}

	render() {
		const { language } = this.props;
		const { projects, idx } = this.state;

		return (
			<DumbIntro
				language={language}
				project={projects[idx]}
				idx={idx}
				handleSelectProject={this.handleSelectProject}
			/>
		)
	}



}

/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */



const DumbIntro = props => {
	const { language, project, handleSelectProject, idx } = props;

	const ratmapData = new ProjectData(
		new BilingualText("RatMap", "鼠图"),
		new BilingualText("Experience the real New York City", "体验地道的纽约"),
		[
			new BilingualText("Visualization for NYC Open Data's rat infestation inspections", "他妈太多老鼠, 卧槽看看有多少"),
			new BilingualText("Users can filter by borough or location and calculate likelihood of infestation", "用户可以通过地区或地址计算老鼠侵扰的盖然性"),
			new BilingualText("Built using React, Redux, Socrata Web API, and Google Maps API", "使用的工具包括React, Redux, Socrata联网API, 与谷歌地图API")

		],
		[
			new Link(false, "https://github.com/dillonius01/ratmap", "zmdi zmdi-github zmdi-hc-2x"),
			new Link(true, "http://ratmap.herokuapp.com", "/public/logos/icon-rat.png"),
			new Link(false, "https://www.youtube.com/watch?v=eCVuL15I0G4", "zmdi zmdi-youtube-play zmdi-hc-2x"),
		]);

	return(
		<div className="clearfix card-container">
			<div className="col-12">
				<h2 className="txt-center txt-intro name">
					{ (language === 'English') ?
						"Hi, my name is Dillon" :
						"你好，我名字叫彭郎"
					}
				</h2>
				<h2 className="txt-center txt-intro">
					{ (language === 'English') ?
						"Among other things, I am a software engineer" :
						"我有不同身份，其中一个是软件工程师"
					}
				</h2>
				<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"Here are some cool projects I built" :
					"看看我做过的酷毙项目"
				}
				</h2>
			</div>

			<div className="col-12 project-button-container">
				<div className="col-4 inline-block">
					<button
						className={`project-name-txt ripple ${(project === 'wejay') ? 'selected' : ''}`}
						name="wejay"
						value={0}
						onClick={handleSelectProject}>
						{(language === 'English') ? "weJay" : "微贼"}
					</button>
				</div>
				<div className="col-4 inline-block">
					<button className={`project-name-txt ripple ${(project === 'ratmap') ? 'selected' : ''}`}
						name="ratmap"
						value={1}
						onClick={handleSelectProject}>
						{(language === 'English') ? ratmapData.title.english : ratmapData.title.chinese }
					</button>
				</div>
				<div className="col-4 inline-block">
					<button
						className={`project-name-txt ripple ${(project === 'newsmirror') ? 'selected' : ''}`}
						name="newsmirror"
						value={2}
						onClick={handleSelectProject}>
						{(language === 'English') ? "News Mirror" : "镜子新闻"}
					</button>
				</div>
			</div>
			<div className="col-12 underline-container">
				<div className={`underline pos-${idx}`}></div>
			</div>

			<div className="col-12">
				{
					(project === 'wejay') ?
					<WeJay language={language} />
					:
					null

				}

				{
					(project === 'ratmap') ?
					<Project language={language} projectData={ratmapData} />
					:
					null
				}
				{
					(project === 'newsmirror') ?
					<NewsMirror language={language} />
					:
					null
				}
			</div>


		</div>
	)
}


export default Intro;

