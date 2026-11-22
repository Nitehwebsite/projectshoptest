import { useState } from 'react';
import { ArrowRight, MapPin, Sparkles, UserRound } from 'lucide-react';

function Event() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    address: '',
    major: '',
    gender: '',
  });
  const [submittedProfiles, setSubmittedProfiles] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProfile(currentProfile => ({ ...currentProfile, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedProfiles(currentProfiles => [...currentProfiles, profile]);
    setProfile({
      name: '',
      age: '',
      address: '',
      major: '',
      gender: '',
    });
  }

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-10 text-slate-900">
      <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 size-80 rounded-full bg-amber-200/50 blur-3xl" />
      <section className="relative mx-auto w-full max-w-3xl space-y-5">
      <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-[0_24px_80px_-28px_rgba(194,65,12,0.28)] backdrop-blur">
        <div className="bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-5 text-white">
          <div className="mb-3 grid size-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25">
            <Sparkles size={20} aria-hidden="true" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">Your details</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">Create your profile</h1>
          <p className="mt-1 text-sm text-orange-100">Add your information below to get started.</p>
        </div>

        <form className="space-y-4 p-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700" htmlFor="profile-name">Name</label>
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              id="profile-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={profile.name}
              onChange={handleChange}
              required
            />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700" htmlFor="profile-age">Age</label>
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              id="profile-age"
              name="age"
              type="number"
              min="1"
              max="120"
              placeholder="Your age"
              value={profile.age}
              onChange={handleChange}
              required
            />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-700" htmlFor="profile-address">Address</label>
            <textarea
              className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              id="profile-address"
              name="address"
              rows="2"
              autoComplete="street-address"
              placeholder="Where do you live?"
              value={profile.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700" htmlFor="profile-major">Major</label>
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              id="profile-major"
              name="major"
              type="text"
              placeholder="Your major"
              value={profile.major}
              onChange={handleChange}
              required
            />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700" htmlFor="profile-gender">Gender</label>
            <select
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              id="profile-gender"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            </div>
          </div>
          <button
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:from-orange-700 hover:to-amber-600 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            type="submit"
          >
            Submit profile
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </form>
      </div>

      {submittedProfiles.length > 0 && (
        <section className="space-y-3" aria-live="polite">
          <h2 className="px-1 text-lg font-bold">User information ({submittedProfiles.length})</h2>
          {submittedProfiles.map((submittedProfile, index) => (
            <article
              className="flex flex-col gap-3 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_16px_48px_-28px_rgba(194,65,12,0.28)] backdrop-blur sm:flex-row sm:items-center sm:gap-5"
              key={index}
            >
              <div className="flex shrink-0 items-center gap-2 sm:w-40">
                <div className="grid size-9 place-items-center rounded-xl bg-orange-100 text-orange-700">
                  <UserRound size={18} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold">{submittedProfile.name}</h3>
                  <p className="text-xs text-slate-500">Profile {index + 1}</p>
                </div>
              </div>
              <dl className="grid min-w-0 flex-1 grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
                <div className="rounded-lg bg-slate-50 px-3 py-2 sm:min-w-16">
                  <dt className="text-[10px] font-medium text-slate-500">Age</dt>
                  <dd className="text-xs font-semibold">{submittedProfile.age}</dd>
                </div>
                <div className="min-w-0 rounded-lg bg-slate-50 px-3 py-2 sm:max-w-40">
                  <dt className="text-[10px] font-medium text-slate-500">Major</dt>
                  <dd className="truncate text-xs font-semibold">{submittedProfile.major}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  <dt className="text-[10px] font-medium text-slate-500">Gender</dt>
                  <dd className="text-xs font-semibold capitalize">{submittedProfile.gender.replaceAll('-', ' ')}</dd>
                </div>
                <div className="col-span-2 flex min-w-0 items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 sm:flex-1">
                  <MapPin className="shrink-0 text-orange-600" size={15} aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-[10px] font-medium text-slate-500">Address</dt>
                    <dd className="truncate text-xs font-semibold">{submittedProfile.address}</dd>
                  </div>
                </div>
              </dl>
            </article>
          ))}
        </section>
      )}
      </section>
    </main>
  );
}

export default Event;
