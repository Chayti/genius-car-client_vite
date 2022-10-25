import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember/TeamMember';

const Team = () => {

    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        fetch("Data/allTeam.json")
            .then(res => res.json())
            .then(data => setTeamMembers(data.team_members))
    }, [])

    return (
        <div className="section-2 mt-20">
            <div className="mx-7 ml-3 px-5 mt-7 lg:mt-0 text-center">
                <p className="text-orange-700 font-bold">Team</p>
                <h2 className="md:text-3xl md:font-bold mt-3">Meet Our Team</h2><br />
                <p className="w-3/4 mx-auto mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt cupiditate repellat natus vero nemo quos, voluptate, dolorem molestias voluptas consequuntur fuga.</p><br />
            </div>
            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    teamMembers?.map(teamMember => <TeamMember
                        key={teamMember.team_id}
                        teamMember={teamMember}
                    ></TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;