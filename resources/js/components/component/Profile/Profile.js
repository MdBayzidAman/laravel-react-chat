import React from 'react';


function Profile() {
	
	return (
		<>
			<div className="profile-section">
				<div className="ti-arrow-left profileBack"> </div>
					<div className="profile-pic">
						
						
					</div>
					<div className="profile-user">
						<span id="profile-name" ></span>
					</div>
					<div className="profile-req">
						
						<input type="hidden" className="profileUsername" value=""/>
						
						<div className="add-contact">
							<p>Add Contacts</p>
						</div>
						
						<div className="inbox">
							<p>Inbox</p>
						</div>
						
						<button className="ti-comment-alt msg-link-btn msg-prof">
						</button>
						
						<div className="msg-link-btn edit-prof">
							<span className="ti-pencil-alt "></span>
						</div>
						
						<button className="ti-link msg-link-btn link-prof "></button>
						
					</div>
					<hr style="width: 90%;margin: auto;border: 0.1px solid #ddd;" />
					
					<div id="profile-bio" className="bio">
						<p></p>
					</div>
					<div className="profile-info">
						<ul>
							<li>Live In <b id="profile-address"> </b></li>
							<li>Gender <b id="profile-gender" ></b></li>
							<li>Profile Link <b id="profile-link" ></b></li>
						</ul>
					</div>
				</div>
		</>
	);
}

export default Profile;