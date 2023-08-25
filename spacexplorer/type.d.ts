export {};

declare global {
  interface Mission {
    name: string;
    flight: number;
  }

  interface Capsule {
    capsule_serial: string;
    capsule_id: string;
    status: 'active' | 'retired' | 'unknown' | 'destroyed';
    original_launch: string;
    original_launch_unix: number;
    missions: Mission[];
    landings: number;
    type: string;
    details: string;
    reuse_count: number;
  }
}
