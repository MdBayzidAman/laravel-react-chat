import React from 'react';


function UpdateProfile() {
	
	return (
		<>
			<div className="edit-profile pt-5">
				<h3 style="text-align:center;">Update Profile</h3>
				<form action="/update-profile-info" enctype="multipart/form-data" className="profile_form" method="post">
					{{csrf_field()}}
					
					<div className="form_div">
					  <input name="username" type="hidden" value="{{$user->username}}"/>
					   <label for="name">Name</label>
					   <br />
					   
					   <input name="firstName" type="text" className="input-name input-primary firstName" placeholder="First Name" value="{{$user->firstName}}" />
					   
					   <input name="lastName" type="text" className="input-name input-primary lastName" placeholder="Last Name"  value="{{$user->lastName}}"/><br /><br />
					   
					   <label for="bio">Bio</label>
					   <input name="bio" type="text" className="input-primary bio" placeholder="Add Your Bio..." value="{{$user->bio}}" /> <br /><br />
					   
					   <label for="address">Address</label>
					   <input name="address" type="text" className="input-primary address" placeholder="Address" value="{{$user->address}}" /><br /><br />
					   
					   
					   <label for="pic">Profile Image</label>
					   <input name="image" type="file" className="input-primary" placeholder="Profile Pic" /><br /><br />
					   
					   
					   <label for="gender">Gender</label>
					   <br />
					   
					   
					   <div className="d-flex" >	
					   
						   <div className="input-name gender" >
						   
							   <label for="male">
								 <span>Male</span>
								 <input name="gender" id="male"  value="Male" type="radio" 
								<?php 
								if($user->gender=='Male'){
									echo 'checked="true"';
								}else{};
								?>							
								 style="float:right" />
							   </label>
						   </div>
						   
						   <div className="input-name gender">
							<label for="female">
								<span>Female</span>
								<input name="gender" id="female" value="Female" type="radio"
								<?php 
								if($user->gender=='Female'){
									echo 'checked="true"';
								}else{};
								?>
								style="float:right;" />
							</label>
						   </div>
					   </div>
					   <br />
					   <input type="submit" value="Update"className="submit " />
					</div>
				</form>
			</div>
		</>
	);
}

export default UpdateProfile;