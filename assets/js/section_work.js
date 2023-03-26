// mattfeeney.us - Javascript for Work Section


// Loop for Work Entries 

const workEntry = document.querySelector('#work_content');

let workHtml = '';

for ( let i = 1; i < 3; i++ ) {
	workHtml += `
		<div class="single_work work_entry1">
			<a href="https://www.friendsforevergolf.com" target="_blank">

				<div class="work_title">
					Friends Forever, Inc.
				</div>
				
				<div class="work_ss">
					<img src="assets/img/friends_forever_ss.png">
				</div>
				
			</a>
		</div>
		
		<div class="single_work work_entry2">
			<a href="http://mikelfruitsrofhf.org" target="_blank">

				<div class="work_title">
					Mikel Fruits ROFHF
				</div>

				<div class="work_ss">
					<img src="assets/img/mfrofhf_ss.png">
				</div>
				
			</a>
		</div>
		
		<div class="single_work work_entry3">
			<a href="http://allproductionsindy.com" target="_blank">

				<div class="work_title">
					All Productions Indy
				</div>
				
				<div class="work_ss"> 
					<img src="assets/img/api_ss.png">
				</div>
				
			</a>
		</div>

		<div class="single_work work_entry4">
			<a href="https://teamtreehouse.com/profiles/mattfeeney" target="_blank">

				<div class="work_title">
					Treehouse Profile
				</div>
			
				<div class="work_ss">
					<img src="assets/img/treehouse_profile_ss.png">
				</div>
				
			</a>
		</div>
	`
	;
}

workEntry.innerHTML = workHtml;




/*

// CUT FROM <div id="work_content"> --->


<div class="single_work work_entry1">
	<a href="https://www.friendsforevergolf.com" target="_blank">

		<div class="work_title">
			Friends Forever, Inc.
		</div>
		
		<div class="work_ss">
			<img src="assets/img/friends_forever_ss.png">
		</div>
		
	</a>
</div>

<div class="single_work work_entry2">
	<a href="http://mikelfruitsrofhf.org" target="_blank">

		<div class="work_title">
			Mikel Fruits ROFHF
		</div>

		<div class="work_ss">
			<img src="assets/img/mfrofhf_ss.png">
		</div>
		
	</a>
</div>

<div class="single_work work_entry3">
	<a href="http://allproductionsindy.com" target="_blank">

		<div class="work_title">
			All Productions Indy
		</div>
		
		<div class="work_ss"> 
			<img src="assets/img/api_ss.png">
		</div>
		
	</a>
</div>

<div class="single_work work_entry4">
	<a href="https://teamtreehouse.com/profiles/mattfeeney" target="_blank">

		<div class="work_title">
			Treehouse Profile
		</div>
	
		<div class="work_ss">
			<img src="assets/img/treehouse_profile_ss.png">
		</div>
		
	</a>
</div>

*/








