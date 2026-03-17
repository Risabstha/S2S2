
export interface TeamMember {
  id: number | string;
  img: string;
  name: string;
  role: string;
  bio: string;
}

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="relative bg-[#dedad3] min-h-[430px] p-8 text-black overflow-hidden rounded-t-sm rounded-bl-sm rounded-br-[56px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="pointer-events-none absolute -left-12 -top-28 h-[300px] w-[300px] rounded-full border border-[#b6801b]/20" />
      <div className="pointer-events-none absolute -right-24 top-24 h-[260px] w-[260px] rounded-full border border-[#b6801b]/10" />

      <div className="absolute top-6 right-6 h-[250px] w-[220px] border border-[#d98f06] bg-[#f3f3f3] clip-member-badge flex items-center justify-center overflow-hidden">
        <img src={member.img} alt={member.name} className="w-full h-full object-cover" draggable={false} onDragStart={(e) => e.preventDefault()} />
      </div>

      <div className="relative z-10 pt-65 h-full flex flex-col">
        <h2 className="text-[25px] md:text-[30px] lg:text-[35px] leading-[1.08] font-semibold mb-2 max-w-[18ch]">
          {member.name}
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.2] text-black/85 font-medium mb-3">
          {member.role}
        </p>
        <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.55] text-black/80 max-w-[35ch]">
          {member.bio}
        </p>
      </div>
    </article>
  );
}
